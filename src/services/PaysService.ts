import type {Pays} from "@/typings/Pays.ts";
import {api} from "@/api.ts";

export default class PaysService {

  async recupererToutLesPays(): Promise<Pays[]> {
    const reponse = await api.get<any[]>('/all?fields=name,flags');
    return reponse.data;
  }
}
