import { DateTime } from "luxon";
import {
  column,
  BaseModel,
  beforeCreate,
  beforeUpdate,
} from "@ioc:Adonis/Lucid/Orm";
import Log from "./Log";

const LogAction = {
  Create: 0,
  Update: 1,
} as const;

export default class LoggerModel extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeCreate()
  public static async createLog(model: LoggerModel) {
    const dirtyProps = Object.keys(model.$dirty);
    await Log.create({ props: dirtyProps, action: LogAction.Create });
  }

  @beforeUpdate()
  public static async updateLog(model: LoggerModel) {
    const dirtyProps = Object.keys(model.$dirty);
    await Log.create({ props: dirtyProps, action: LogAction.Update });
  }
}
