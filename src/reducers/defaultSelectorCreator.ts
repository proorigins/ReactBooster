import {createSelectorCreator, defaultMemoize} from "reselect";
import _ from "lodash";

export const defaultSelectorCreator = createSelectorCreator(defaultMemoize, _.isEqual);
