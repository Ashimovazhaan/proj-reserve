from rest_framework import serializers
from api.models import Category, Products, Authors
#first Serializer
class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    pict =serializers.CharField()
    def create(self, validated_data):
        category = Category.objects.create(name=validated_data.get('name'),pict=validated_data.get('pict'))
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.pict = validated_data.get('pict',instance.pict)
        instance.save()
        return instance

#second Serializer
class AuthorsSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    pict =serializers.CharField()

    def create(self, validated_data):
        author = Authors.objects.create(name=validated_data.get('name') , pict= validated_data.get('pict'))
        return author

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.pict =validated_data.get('pict',instance.pict)
        instance.save()
        return instance

class ProductsSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    author = AuthorsSerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)
    authors_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Products
        fields = ('id', 'name', 'description', 'price', 'pict', 'category', 'rating', 'category_id', 'author', 'authors_id' )


