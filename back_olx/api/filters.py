from django_filters import rest_framework as filters
from api.models import Products, Category

class ProductFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')
    price = filters.CharFilter(lookup_expr='contains')


    class Meta:
        model = Products
        fields = ('name', 'price'),

class CategoryFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Category
        fields = ('name'),