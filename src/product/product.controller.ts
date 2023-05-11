import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProduct } from './dto/create-product.dto';
import { UpdateProduct } from './dto/update-product.dto';
import { PatchProduct } from './dto/patch-product.dto';

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService){}

    // get all product + query
    @Get()
    async getAllProducts(@Query('q') query: string){
        return await this.productService.getAllProducts(query)
    }

    // get by id
    @Get(':id')
    async getProductById(@Param('id', ParseIntPipe) id: number){
        return await this.productService.getProductById(id)
    }

    // create product
    @Post()
    async createProduct(
    @Body('userId', ParseIntPipe) userId: number, 
    @Body() productDto: CreateProduct){
        return await this.productService.createProduct(userId, productDto)
    }

    // update product
    @Put(':id')
    async updateProduct(
    @Param('id', ParseIntPipe) id: number, 
    @Body() productDto: UpdateProduct){
        return await this.productService.updateProduct(id, productDto)
    }

    // update product (PATCH)
    @Patch(':id')
    async updateProductPatch(
    @Param('id', ParseIntPipe) id: number, 
    @Body() productDto: PatchProduct){
        return await this.productService.updateProductPatch(id, productDto)
    }

    // delete product
    @Delete(':id')
    async deleteProduct(@Param('id', ParseIntPipe) id: number){
        return await this.productService.deleteProduct(id)
    }

}
