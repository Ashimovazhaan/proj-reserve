
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from api.models import Category, Authors, Products
from api.serializers import CategorySerializer, AuthorsSerializer, ProductsSerializer

from rest_framework.decorators import api_view

#First CBV
class CategoryList(APIView):
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

#Second CBV
class CategoryDetail(APIView):
    def get_category(self, pk):
        try:
            return Category.objects.get(id=pk)
        except Category.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, pk):
        category = self.get_category(pk)
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    def put(self, request, pk):
        category = self.get_category(pk)
        serializer = CategorySerializer(instance=category, data=request.data)
        if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
        return Response({'errors': serializer.errors})

    def delete(self, request, pk):
        category = self.get_category(pk)
        category.delete()
        return Response({'deleted': True})


class Products_List(APIView):
    def get(self, request):
        products = Products.objects.all()
        serializers = ProductsSerializer(products, many=True)
        return Response(serializers.data)

    def post(self, request):
        serializers = ProductsSerializer(data=request.data)
        if serializers.is_valid():
           serializers.save()
           return Response(serializers.data, status=status.HTTP_201_CREATED)
        return Response({'errors': serializers.errors}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class Products_Detail(APIView):
    def get_products(self, pk):
        try:
            return Products.objects.get(id=pk)
        except Products.DoesNotExist as e:
            return Response({'errors': str(e)})

    def get(self, request, pk):
       product = self.get_products(pk)
       serializer = ProductsSerializer(product)
       return Response(serializer.data)


    def put(self, request, pk):
        product = self.get_products(pk)
        serializer = ProductsSerializer(instance=product, data=request.data)
        if serializer.is_valid():
           serializer.save()
           return Response(serializer.data)

    def delete(self, request, pk):
        product = self.get_products(pk)
        product.delete()
        return Response({'deleted': True})



#First FBV
@api_view(['GET', 'POST'])
def author_list(request):
    if request.method == 'GET':
        authors = Authors.objects.all()
        serializer = AuthorsSerializer(authors, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = AuthorsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

#Second FBV
@api_view(['GET', 'PUT', 'DELETE'])
def author_detail(request, pk):
    try:
        author = Authors.objects.get(id=pk)
    except Author.DoesNotExist as e:
        return Response({'errors': str(e)})

    if request.method == 'GET':
        serializer = AuthorsSerializer(author)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = AuthorsSerializer(instance=author, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'errors': serializer.errors})

    elif request.method == 'DELETE':
        author.delete()
        return Response({'deleted': True})

@api_view(['GET', 'POST'])
def category_products(request, pk):
    if request.method == 'GET':
        category = Category.objects.get(id=pk)
        products = category.products_set.all()
        serializer = ProductsSerializer(products, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
         serializer = ProductsSerializer(data=request.data)
         if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
         return Response({'error': serializer.errors}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)





@api_view(['GET'])
def author_products(request, pk):
    try:
        author = Authors.objects.get(id=pk)
    except Author.DoesNotExist as e:
        return Response({'errors': str(e)})
    products = author.products_set.all()
    serializer = ProductsSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def top_products(request):
    top_list = Products.top_list.all()
    serializer = ProductsSerializer(top_list, many=True)
    return Response(serializer.data)
