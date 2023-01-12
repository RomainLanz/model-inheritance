import { DateTime } from "luxon";
import { column, BaseModel, beforeCreate } from "@ioc:Adonis/Lucid/Orm";

export default class MyCustomBaseModel extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeCreate()
  public static async createLog(model: MyCustomBaseModel) {
    console.log("Saving", model);
  }
}
