import { Body, Controller, Get, Post } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../service/produto.service";

@Controller('/produtos')
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) {}

    @Get()
    findAll(): Promise<Produto[]> {
        return this.produtoService.findAll();
    }

    @Post()
    create(@Body() produto: Produto): Promise<Produto> {
        return this.produtoService.create(produto);
    }
}