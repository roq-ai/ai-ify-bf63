import axios from 'axios';
import queryString from 'query-string';
import { AiToolInterface, AiToolGetQueryInterface } from 'interfaces/ai-tool';
import { GetQueryInterface } from '../../interfaces';

export const getAiTools = async (query?: AiToolGetQueryInterface) => {
  const response = await axios.get(`/api/ai-tools${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createAiTool = async (aiTool: AiToolInterface) => {
  const response = await axios.post('/api/ai-tools', aiTool);
  return response.data;
};

export const updateAiToolById = async (id: string, aiTool: AiToolInterface) => {
  const response = await axios.put(`/api/ai-tools/${id}`, aiTool);
  return response.data;
};

export const getAiToolById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/ai-tools/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAiToolById = async (id: string) => {
  const response = await axios.delete(`/api/ai-tools/${id}`);
  return response.data;
};
