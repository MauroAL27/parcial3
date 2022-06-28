import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Person } from 'src/app/person';
import { Song } from "../../song";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(public firestore: AngularFirestore) { }

  createSong(albumName: string, artistName: string, songDescription: string, songName: string): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`songList/${id}`).set({ id, albumName, artistName, songDescription, songName });
  }

  getSongList(): AngularFirestoreCollection<Song> {
    return this.firestore.collection('songList');
  }

  getSongtDetail(path: string, songId: string) {
    const value = this.firestore.collection(path);
    return value.doc(songId).valueChanges();
  }

  deleteSong(songId: string): Promise<void> {
    return this.firestore.doc(`songList/${songId}`).delete();
  }

  updateSong(albumName: string, artistName: string, songDescription: string, songName: string, id: string): Promise<void> {
    return this.firestore.doc(`songList/${id}`).update({ id, albumName, artistName, songDescription, songName });
  }

  createPerson(personName: string, personLastName: string, personEmail: string): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`personList/${id}`).set({ id, personName, personLastName, personEmail });
  }

  getPersonList(): AngularFirestoreCollection<Person> {
    return this.firestore.collection('personList');
  }

}
