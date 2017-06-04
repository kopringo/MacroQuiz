# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill

# Create your models here.

ANSWER_MODE = (
    (0, 'default'),
)

class Language(models.Model):
    short = models.CharField(max_length=2)
    label = models.CharField(max_length=32)
    label_en = models.CharField(max_length=32, blank=True)
    
    def __unicode__(self):
        return u'%s' % self.label_en
    
class Question(models.Model):
    photo1 = models.ImageField(upload_to='var/upload')
    photo1_thumb = ImageSpecField(source='photo1',
                                      processors=[ResizeToFill(600, 450)],
                                      format='JPEG',
                                      options={'quality': 100})
    photo2 = models.ImageField(upload_to='var/upload')
    photo2_thumb = ImageSpecField(source='photo2',
                                      processors=[ResizeToFill(600, 450)],
                                      format='JPEG',
                                      options={'quality': 100})
    date = models.DateTimeField()
    owner = models.ForeignKey(User)
    
    def __unicode__(self):
        return u'%s' % str(self.id)
    
class Answer(models.Model):
    question = models.ForeignKey(Question)
    lang = models.ForeignKey(Language)
    text = models.CharField(max_length=32)
    mode = models.IntegerField(choices=ANSWER_MODE)
    
    def __unicode__(self):
        return u'%s. %s' % (str(self.id), self.text)