// Generated by the Freon Language Generator.
import {
    ActionBox,
    Box,
    PiEditor,
    PiCaret,
    PiCreateBinaryExpressionAction,
    PiCustomAction,
    PiCombinedActions,
    RoleProvider, isString, PiTriggerUse
} from "@freon4dsl/core";
import { NumberLiteralExpression } from "../language/gen/NumberLiteralExpression";

/**
 * Class CustomEntityActions provides an entry point for the language engineer to
 * define custom build additions to the editor.
 * These custom build additions are merged with the default and definition-based editor parts
 * in a three-way manner. For each modelelement,
 * (1) if a custom build creator/behavior is present, this is used,
 * (2) if a creator/behavior based on the editor definition is present, this is used,
 * (3) if neither (1) nor (2) yields a result, the default is used.
 */
export class CustomEntityActions implements PiCombinedActions {
    binaryExpressionActions: PiCreateBinaryExpressionAction[] = MANUAL_BINARY_EXPRESSION_ACTIONS;
    customActions: PiCustomAction[] = MANUAL_CUSTOM_ACTIONS;
}

export const MANUAL_BINARY_EXPRESSION_ACTIONS: PiCreateBinaryExpressionAction[] = [
    // Add your own custom binary expression creators here
];

export const MANUAL_CUSTOM_ACTIONS: PiCustomAction[] = [
    // Add your own custom behavior here
    PiCustomAction.create({

        activeInBoxRoles: [
            "Method-body",
            "AbsExpression-expr",
            "SumExpression-from",
            "SumExpression-to",
            "SumExpression-body",
            "IfExpression-condition",
            "IfExpression-whenTrue",
            "IfExpression-whenFalse",
            "PiBinaryExpression-left",
            "PiBinaryExpression-right",
            "MultiplyExpression-left",
            "MultiplyExpression-right",
            "PlusExpression-left",
            "PlusExpression-right",
            "DivideExpression-left",
            "DivideExpression-right",
            "AndExpression-left",
            "AndExpression-right",
            "OrExpression-left",
            "OrExpression-right",
            "ComparisonExpression-left",
            "ComparisonExpression-right",
            "LessThenExpression-left",
            "LessThenExpression-right",
            "GreaterThenExpression-left",
            "GreaterThenExpression-right",
            "EqualsExpression-left",
            "EqualsExpression-right"
        ],
        trigger: /[0-9]/,
        action: (box: Box, trigger: PiTriggerUse, editor: PiEditor) => {
            const parent = box.element;
            const x = new NumberLiteralExpression();
            if( isString(trigger) ) {
                x.value = Number.parseInt(trigger.toString());
            }
            parent[(box as ActionBox).propertyName] = x;
            return x;
        },
        boxRoleToSelect: RoleProvider.property("NumberLiteralExpression", "value", "numberbox"),
        caretPosition: PiCaret.RIGHT_MOST
    })

];

