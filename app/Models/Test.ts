import { column } from "@ioc:Adonis/Lucid/Orm";
import LoggerModel from "./LoggerModel";

export default class Test extends LoggerModel {
  @column()
  public name: string;
}
