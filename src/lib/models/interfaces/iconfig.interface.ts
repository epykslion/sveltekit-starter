import type { EnvironmentName, EnvironmentType } from '../enums';
import type { APIConfig } from '../types/api-config.type';

export interface IConfig {
	lauchURL: string;
	environmentType: EnvironmentType;
	production: boolean;
	isDebugMode: boolean;
	name: EnvironmentName;
	apiUrls: APIConfig;
}
