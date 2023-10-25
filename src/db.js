import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('post.db')

export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY NOT NULL, text TEXT NOT NULL, img TEXT NOT NULL, date TEXT, booked INT)',
          [],
          resolve,
          (_, error) => reject(error)
        )
      })
    })
  }
}