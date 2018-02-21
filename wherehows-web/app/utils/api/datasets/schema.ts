import { IDatasetSchema, IDatasetSchemaGetResponse } from 'wherehows-web/typings/api/datasets/schema';
import { datasetUrlByUrn } from 'wherehows-web/utils/api/datasets/shared';
import { getJSON } from 'wherehows-web/utils/api/fetcher';

/**
 * Returns the url for a dataset schema by urn
 * @param {string} urn
 * @return {string}
 */
const datasetSchemaUrlByUrn = (urn: string): string => `${datasetUrlByUrn(urn)}/schema`;

/**
 * Reads the schema for a dataset with the related urn
 * @param {string} urn
 * @return {Promise<IDatasetSchema>}
 */
const readDatasetSchemaByUrn = async (urn: string): Promise<IDatasetSchema> => {
  const { schema } = await getJSON<IDatasetSchemaGetResponse>({ url: datasetSchemaUrlByUrn(urn) });
  return schema;
};

export { readDatasetSchemaByUrn };
