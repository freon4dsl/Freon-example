import * as React from "react";
import { Selection } from "office-ui-fabric-react/lib/DetailsList";
import { Icon, Tree, Box, RadioGroup } from "@fluentui/react-northstar";
import { ComponentEventHandler } from "@fluentui/react-northstar/";
import { SelectionMode, SelectionZone } from "office-ui-fabric-react/lib/Selection";
import { computed, observable } from "mobx";
import { observer } from "mobx-react";

// TODO try to make dependence of EditorCommunication as small as possible
import { EditorCommunication} from "./EditorCommunication";
import { IModelUnitData } from "./IServerCommunication";
import { PiNamedElement } from "@projectit/core";
import CommonOperations from "./CommonOperations";
import DialogData from "./DialogData";
import { ServerCommunication } from "./ServerCommunication";
import { App } from "./App";

// This component holds the navigator, which shows all available models sorted by language

// The type of an element in the navigation tree
type TreeElement = {
    id: string;
    title: string;
    items: TreeElement[];
    parent: string;
    onTitleClick: ComponentEventHandler<TreeElement>;
    // selectable: string;
    as: string; // TODO add styling
};

const titleRenderer = (Component, { content, open, hasSubtree, selected, ...restProps }) => (
    // TODO icons do not work
    <Component open={open} hasSubtree={hasSubtree} {...restProps}>
        {hasSubtree && <Icon name={open ? "triangle-down" : "triangle-right"} />}
        {!hasSubtree && <Icon name={selected ? "add" : "Add"} />}
        <span>{content}</span>
    </Component>
);

@observer
export class Navigator extends React.Component<{}, {}> {
    // TODO keep current selection
    private dialogData: DialogData = new DialogData(); // used for saving previously change data in the editor
    private _selection: Selection;
    private _indexToTree: Map<number, PiNamedElement> = new Map<number, PiNamedElement>();
    private _activeItemId: string = "-1";

    constructor(props: {}) {
        super(props);

        this._selection = new Selection();
        EditorCommunication.getInstance().editorArea.navigator = this;
    }

    @computed get buildTree(): TreeElement[] {
        let tree: TreeElement[] = [];
        let model = EditorCommunication.getInstance().currentModel;
        if(!!model) {
            let modelGroup: TreeElement = {
                id: model.name,
                title: model.name,
                items: [],
                onTitleClick: this._onTitleClick,
                as: "h5",
                parent: "",
                // selectable: "false"
            };
            tree.push(modelGroup);
            EditorCommunication.getInstance().currentModel.getUnits().forEach((unit, index) => {
                this._indexToTree.set(index, unit);
                let elem: TreeElement = {
                    id: index.toString(10),
                    title: unit.name,
                    items: [],
                    onTitleClick: this._onTitleClick,
                    as: "h5",
                    parent: modelGroup.id,
                    // selectable: "true"
                };
                modelGroup.items.push(elem);
            });
        }
        return tree;
    }

    private _onTitleClick = async (ev: React.MouseEvent<HTMLElement>, item?: TreeElement) => {
        if (!!item.id) { // every model unit is a leaf in the navigation tree
            // get from item.id the right name to put through to the open request
            this.dialogData.selectedTreeItem = this._indexToTree.get(Number(item.id));
            if (!!this.dialogData.selectedTreeItem) {
                // save changes of old unit
                await CommonOperations.getInstance().saveChangesBeforeCallback(this.dialogData, this.internalOpenModel);
                // TODO show selection with grey background (or something)
            }
        }
    }

    private internalOpenModel(dialogData: DialogData) {
        EditorCommunication.getInstance().openModelUnit(dialogData.selectedTreeItem.name);
    }

    render(): JSX.Element {
        return (
            <Box
                styles={{
                    gridColumn: "2",
                    // height: "calc((100vh -220px) * 0.80)",
                    gridRow: "1",
                    // border: "1px solid #ccc",
                    width: "100%"
                    // overflowX: "auto",
                    // overflowY: "auto"
                }}
            >
                {/*<SelectionZone selection={this._selection} selectionMode={SelectionMode.single}>*/}
                <Tree
                    items={this.buildTree}
                    title="Model Units"
                    renderItemTitle={titleRenderer}
                    aria-label="Initially open"
                    defaultActiveItemIds={[this._activeItemId]}
                />
                {/*</SelectionZone>*/}
            </Box>
        );
    }
}

