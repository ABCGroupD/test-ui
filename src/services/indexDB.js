import {Dexie} from 'dexie'

const db = new Dexie("PROFATAR")
db.version(1).stores(
    {
        assets: "++id, name, alias, transactionId"
    }
)

export const saveAsset = async (asset) => {
    db.assets.add({
        name: asset.assetName,
        alias: asset.alias
    })
}

export const fetchAll = async () => {
    return await db.table("assets").toArray()
}