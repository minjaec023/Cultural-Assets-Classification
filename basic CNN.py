import tensorflow as tensor
from tensorflow import keras
from tensorflow.keras import utils
from tensorflow.keras import layers
from tensorflow.keras import datasets
from tensorflow.keras.callbacks import EarlyStopping
from tensorflow.keras.layers import Dense, Dropout, Flatten, Conv2D, MaxPooling2D
import numpy as np
import matplotlib.pyplot as plt
from keras.utils import np_utils
import random

# 데이터를 트레이닝 데이터와 테스트 데이터로 분할
train_images = np.load('/content/drive/My Drive/train_data.npy')
test_images = np.load('/content/drive/My Drive/test_data.npy')
train_labels = np.load('/content/drive/My Drive/train_label.npy')  # 원핫벡터 형태가 아님 shape: (num of trainset, 1)
test_labels = np.load('/content/drive/My Drive/test_label.npy')  # 원핫벡터 형태가 아님 shape: (num of testset, 1)

# 트레이닝 이미지와 라벨을 셔플
s = np.arange(train_images.shape[0])
np.random.shuffle(s)
train_images = train_images[s]
print ("x: ", train_images)
train_labels = train_labels[s]
print ("y: ", train_labels)

# 테스트셋 셔플하는 코드
# t = np.arange(test_images.shape[0])
# np.random.shuffle(t)
# test_images = test_images[t]
# print ("x: ", test_images)
# test_labels = test_labels[t]
# print ("y: ", test_labels)


# 학습 횟수와 클래스의 개수 설정(CIFAR100이므로 100개)
class_number = 18
epochs = 100

# 한번에 들어갈 데이터 개수 설정
bs = 120

# 트레이닝 데이터와 테스트 데이터를 0~1사이의 수로 정규화, 카테고리를 나눔
train_images = train_images / 255.0
test_images = test_images / 255.0

train_labels = np_utils.to_categorical(train_labels)
test_labels = np_utils.to_categorical(test_labels)

# train_labels = utils.to_categorical(train_labels, class_number)
# test_labels = utils.to_categorical(test_labels, class_number)

# 모델에 Sequential하게 레이어를 쌓음
model = keras.Sequential([
    # 데이터의 특징을 뽑아내는 Conv2D 레이어들
    Conv2D(120, kernel_size=(3, 3), padding='same', input_shape=train_images.shape[1:], activation=tensor.nn.elu),
    MaxPooling2D(pool_size=(2, 2)),
    Dropout(0.1),

    Conv2D(120, kernel_size=(3, 3), padding='same', input_shape=train_images.shape[1:], activation=tensor.nn.elu),
    MaxPooling2D(pool_size=(2, 2)),
    Dropout(0.1),

    Conv2D(120, kernel_size=(3, 3), padding='same', input_shape=train_images.shape[1:], activation=tensor.nn.elu),
    MaxPooling2D(pool_size=(2, 2)),
    Dropout(0.1),

    Conv2D(120, kernel_size=(3, 3), padding='same', input_shape=train_images.shape[1:], activation=tensor.nn.elu),
    MaxPooling2D(pool_size=(2, 2)),
    Dropout(0.1),

    Conv2D(1024, kernel_size=(3, 3), padding='same', activation=tensor.nn.elu),
    MaxPooling2D(pool_size=(2, 2)),
    Dropout(0.1),

    # 마지막 활성함수는 softmax, 마지막 레이어의 출력 레이어의 개수
    Flatten(),
    Dense(class_number, activation=tensor.nn.softmax)])

model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

history = model.fit(train_images, train_labels, epochs=epochs, batch_size=bs,
                    validation_data=(test_images, test_labels), shuffle=True)

loss, acc = model.evaluate(test_images, test_labels)

print("\nloss: {}, Acc: {}".format(loss, acc))


def loss(history):
    plt.plot(history.history['loss'])
    plt.plot(history.history['val_loss'])
    plt.title('Model Loss')
    plt.ylabel('Loss')
    plt.xlabel('Epoch')
    plt.legend(['Train', 'Test'], loc=0)


def acc(history):
    plt.plot(history.history['acc'])
    plt.plot(history.history['val_acc'])
    plt.title('Model accuracy')
    plt.ylabel('Accuracy')
    plt.xlabel('Epoch')
    plt.legend(['Train', 'Test'], loc=0)


loss(history)
plt.show()
acc(history)
plt.show()