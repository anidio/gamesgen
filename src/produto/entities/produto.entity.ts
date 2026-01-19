// src/produto/entities/produto.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';

@Entity({ name: 'tb_produtos' })
export class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255, nullable: false })
    nome: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    preco: number;

    @Column({ length: 500 })
    foto: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: 'CASCADE'
    })
    categoria: Categoria;
}