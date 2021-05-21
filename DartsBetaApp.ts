import {
    IAppAccessors,
    IConfigurationExtend,
    IEnvironmentRead,
    ILogger,
} from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';

import { ExternalComponentLocation } from '@rocket.chat/apps-engine/definition/externalComponent/IExternalComponent';

export class DartsBetaApp extends App {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    protected async extendConfiguration(configuration: IConfigurationExtend, environmentRead: IEnvironmentRead): Promise<void> {
        const { id, name, description, iconFileContent } = this.getInfo();

        configuration.externalComponents.register({
            appId: id,
            name,
            description,
            icon: iconFileContent ? iconFileContent : '',
            location: ExternalComponentLocation.CONTEXTUAL_BAR,
            url: 'https://cdn.frvr.com/beta/darts/rocketchat/?rocket',
        });
    }
}
