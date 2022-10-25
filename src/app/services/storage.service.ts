import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  saveToStorage(key: string, val: Object) {
    localStorage.setItem(key, JSON.stringify(val))
  }

  loadFromStorage(key: string) {
    var val = localStorage.getItem(key)
    return JSON.parse(val as string)
  }
}
