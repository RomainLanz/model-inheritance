import { column } from "@ioc:Adonis/Lucid/Orm";
import MyCustomBaseModel from "./MyCustomBaseModel";

export default class Test extends MyCustomBaseModel {
  @column()
  public name: string;
}
