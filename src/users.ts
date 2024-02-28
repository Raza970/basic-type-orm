import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column("text")
  description: string;

  @Column()
  filename: string;

  @Column("double")
  views: number;

  @Column()
  isPublished: boolean;

  constructor() {
    this.id=12;
    this.name = "";
    this.description = "";
    this.filename = "";
    this.views = 0;
    this.isPublished = false;
  }
}

// import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

// @Entity()
// export class Photo {
//     @PrimaryGeneratedColumn()
//     id: number

//     @Column()
//     name: string

//     @Column()
//     description: string

//     @Column()
//     filename: string

//     @Column()
//     views: number

//     @Column()
//     isPublished: boolean
// }
