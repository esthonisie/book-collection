import { ref, computed } from 'vue';
import { deleteRequest, getRequest, postRequest, putRequest } from '../http';

export const storeModuleFactory = (moduleName: string) => {
  const state = ref({});

  const getters = {
    all: computed(() => state.value),
    getById: (id: number) => computed(() => state.value[id])
  };

  const setters = {
    setAll: (items) => {
      for (const item of items) state.value[item.id] = Object.freeze(item);
    },
    deleteByItem: (item) => {
      delete state.value[item];
    }
  };

  const actions = {
    getAll: async () => {
      const { data } = await getRequest(moduleName);
      if (!data) return;
      setters.setAll(data);
    },
    getRelation: async (parentName: string, parentId: number) => {
      state.value = {};
      const { data } = await getRequest(`${parentName}/${parentId}/${moduleName}`);
      if (!data) return;
      setters.setAll(data);
    },
    getOne: async (id: number) => {
      const { data } = await getRequest(`${moduleName}/${id}`);
      if (!data) return;
      const dataToArr = Array(data);
      setters.setAll(dataToArr);
    },
    create: async (item) => {
      const { data } = await postRequest(moduleName, item);
      if (!data) return;
      setters.setAll(data);
    },
    update: async (id: number, item) => {
      const { data } = await putRequest(`${moduleName}/${id}`, item);
      if (!data) return;
      setters.setAll(data);
    },
    delete: async (id: number) => {
      await deleteRequest(`${moduleName}/${id}`);
      setters.deleteByItem(id);
    }
  };

  return { getters, setters, actions };
};