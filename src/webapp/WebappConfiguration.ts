import { PiEnvironment } from "@projectit/core";
import { IServerCommunication } from "./server/IServerCommunication";
import { ServerCommunication } from "./server/ServerCommunication";

/**
 * The one and only reference to the actual language for which this editor runs
 */
import { EntityEnvironment } from "../picode/environment/gen/EntityEnvironment";
export const editorEnvironment: PiEnvironment = EntityEnvironment.getInstance();

/**
 * The one and only reference to the server on which the models are stored
 */
export const serverCommunication: IServerCommunication = ServerCommunication.getInstance();

