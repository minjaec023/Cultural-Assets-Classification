from keras.models import load_model
import os
import cv2
import numpy as np
import tensorflow as tf
from numpy import array, argmax
import matplotlib.pyplot as plt
import sys

model = tf.keras.models.load_model('C:/Users/sehun/ruins_CNN_model.095.h5')
imgName = sys.argv[1]
path = 'C:/Users/sehun/Desktop/' + imgName

img = cv2.imread(path, cv2.IMREAD_COLOR)
reimg = cv2.resize(img, dsize=(128, 128), interpolation=cv2.INTER_AREA)
# cv2.imwrite('C:/Users/sehun/Desktop/sibal.jpg', reimg)
edges = cv2.Canny(reimg,100,150)
xhat1 = edges.astype('float32') / 255.0
# plt.imshow(xhat1, cmap='Greys', interpolation='nearest');
xhat2 = xhat1.reshape(-1, 128, 128, 1)
print('Python Print')
yhat = model.predict_classes(xhat2)
print('The Answer is ', yhat)
print(yhat[0])
