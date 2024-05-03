from .common import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-vu-z4+^41)$=0sgxt928r%4b-!a7&d1dy=$)z4(+(9+w2w=#mn'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'nanocellum',
        'USER': 'postgres',
        'PASSWORD': '314159',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
