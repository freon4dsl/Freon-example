import { PiElement } from "@projectit/core";

// TODO rethink these interfaces
export interface IModelUnitData {
    // id: number;
    unitName: string;
    modelName: string;
    language: string;
    // url?: string;
}

/**
 *  Takes care of the communication with the server at SERVER_URL from WebappConfiguration.
 */
export interface IServerCommunication {

    /**
     * Takes 'piUnit' and stores it according to the data in 'modelInfo'
     * @param modelInfo
     * @param piUnit
     */
    putModelUnit(modelInfo: IModelUnitData, piUnit: PiElement);

    /**
     * Reads the model unit according to the data in 'modelInfo' from the server and
     * calls 'loadCallBack', which takes the model unit as parameter.
     * @param modelInfo
     * @param loadCallback
     */
    loadModelUnit(modelName: string, unitName: string, loadCallback: (piUnit: PiElement) => void);

    /**
     * Reads the public interface of the model unit according to the data in 'modelInfo' from the server and
     * calls 'loadCallBack', which takes the model unit as parameter.
     * @param modelInfo
     * @param loadCallback
     */
    loadModelUnitInterface(modelName: string, unitName: string, loadCallback: (piUnit: PiElement) => void);

    /**
     * Deletes the model according to the data in 'modelInfo' from the server
     * @param modelInfo
     */
    deleteModelUnit(modelInfo: IModelUnitData);

    /**
     * Deletes the complete model with name 'modelName', including all its modelunits
     * @param languageName
     * @param modelName
     */
    // TODO implement this
    // deleteModel(languageName: string, modelName: string);

    /**
     * Reads the list of model units of language 'languageName' that are available on the server and calls 'modelListCallback'.
     * @param languageName
     * @param modelListCallback
     */
    loadModelList(modelListCallback: (names: string[]) => void);

    /**
     * Reads all interfaces for all available units of model 'modelName' and calls loadCallback for each.
     * @param languageName
     * @param modelName
     * @param loadCallback
     */
    // getInterfacesForModel(languageName: string, modelName: string, loadCallback: (piModel: PiElement) => void);
}
