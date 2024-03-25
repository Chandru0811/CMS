<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function index()
    {
        // All Products
        $products = Product::all();

        // Modify product data to include full image URLs
        $productsData = $products->map(function ($product) {
            return [
                'id' => $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'image_url' => url('storage/' . trim($product->image, '/')), // Full image URL
            ];
        });

        // Return Json Response
        return response()->json([
            'products' => $productsData,
        ], 200);
    }


    public function store(Request $request)
    {
        // Validate incoming request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()->first(),
            ], 400);
        }

        try {
            $imageName = Str::random(32) . "." . $request->file('image')->getClientOriginalExtension();

            // Create Product
            $product = new Product();
            $product->name = $request->name;
            $product->image = $imageName;
            $product->description = $request->description;
            $product->save();

            // Save Image in Storage folder
            $request->file('image')->storeAs('public', $imageName);

            // Return Json Response
            return response()->json([
                'message' => "Product successfully created."
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            // Find product
            $product = Product::find($id);

            if (!$product) {
                return response()->json([
                    'message' => 'Product Not Found.'
                ], 404);
            }

            // Modify product data to include full image URL
            $productData = [
                'id' => $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'image_url' => url('storage/' . trim($product->image, '/')), // Full image URL
            ];

            // Return Json Response
            return response()->json([
                'product' => $productData
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ], 500);
        }
    }


    public function update(Request $request, $id)
    {
        // Validate incoming request
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => $validator->errors()->first(),
            ], 400);
        }

        try {
            // Find product
            $product = Product::find($id);
            if (!$product) {
                return response()->json([
                    'message' => 'Product Not Found.'
                ], 404);
            }

            $product->name = $request->name;
            $product->description = $request->description;

            if ($request->hasFile('image')) {
                // Public storage
                $storage = Storage::disk('public');

                // Old image delete
                if ($storage->exists($product->image)) {
                    $storage->delete($product->image);
                }

                // Image name
                $imageName = Str::random(32) . "." . $request->file('image')->getClientOriginalExtension();
                $product->image = $imageName;

                // Image save in public folder
                $request->file('image')->storeAs('public', $imageName);
            }

            // Update Product
            $product->save();

            // Return Json Response
            return response()->json([
                'message' => "Product successfully updated."
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            // Find product
            $product = Product::find($id);
            if (!$product) {
                return response()->json([
                    'message' => 'Product Not Found.'
                ], 404);
            }

            // Public storage
            $storage = Storage::disk('public');

            // Image delete
            if ($storage->exists($product->image)) {
                $storage->delete($product->image);
            }

            // Delete Product
            $product->delete();

            // Return Json Response
            return response()->json([
                'message' => "Product successfully deleted."
            ], 200);
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json([
                'message' => "Something went really wrong!"
            ], 500);
        }
    }
}
