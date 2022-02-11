import { PiEnvironment } from "@projectit/core";
import { IServerCommunication } from "./server/IServerCommunication";
import { ServerCommunication } from "./server/ServerCommunication";

/**
 * The one and only reference to the actual language for which this editor runs
 */
// import { TestParserEnvironment } from "../parser-test/environment/gen/TestParserEnvironment";
// export const editorEnvironment: PiEnvironment = TestParserEnvironment.getInstance();
// import { OctopusEnvironment } from "../octopus/environment/gen/OctopusEnvironment";
// export const editorEnvironment: PiEnvironment = OctopusEnvironment.getInstance();
import { EntityEnvironment } from "../picode/environment/gen/EntityEnvironment";
export const editorEnvironment: PiEnvironment = EntityEnvironment.getInstance();

// import { ExpressionLibraryEnvironment } from "../libraries-test/environment/gen/ExpressionLibraryEnvironment";
// export const editorEnvironment: PiEnvironment = ExpressionLibraryEnvironment.getInstance();

// import { CalculatorEnvironment } from "../calculator/environment/gen/CalculatorEnvironment";
// export const editorEnvironment: PiEnvironment = CalculatorEnvironment.getInstance();

// import { HeatEnvironment } from "../heating/environment/gen/HeatEnvironment";
// export const editorEnvironment: PiEnvironment = HeatEnvironment.getInstance();

// import { TaxRulesEnvironment } from "../taxrules/environment/gen/TaxRulesEnvironment";
// export const editorEnvironment: PiEnvironment = TaxRulesEnvironment.getInstance();

// import { PiLanguageEnvironment } from "../pi-languages/environment/gen/PiLanguageEnvironment";
// export const editorEnvironment: PiEnvironment = PiLanguageEnvironment.getInstance();

// export const editorEnvironment: PiEnvironment = JsonEnvironment.getInstance();

// import { OpenhabEnvironment } from "../openhab/environment/gen/OpenhabEnvironment";
// export const editorEnvironment: PiEnvironment = OpenhabEnvironment.getInstance();

// import { HDMLEnvironment } from "../HDML/environment/gen/HDMLEnvironment";
// export const editorEnvironment: PiEnvironment = HDMLEnvironment.getInstance();

// import { RulesLanguageEnvironment } from "../rules-language/environment/gen/RulesLanguageEnvironment";
// export const editorEnvironment: PiEnvironment = RulesLanguageEnvironment.getInstance();

/**
 * The one and only reference to the server on which the models are stored
 */
export const serverCommunication: IServerCommunication = ServerCommunication.getInstance();
// export const serverCommunication: IServerCommunication = MpsServerCommunication.getInstance();
