<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container rounded">
        <div class="modal-header">
          <div name="header">Добро пожаловать в тренажер слепой печати!</div>
        </div>
        <hr />
        <div class="modal-body">
          <div name="body">Приготовьтесь. После клика на кнопку "Начать" запустится таймер и вы сможете начать печатать.</div>
        </div>
        <hr />
        <div class="modal-footer">
          <div name="footer">
            <button class="btn btn-primary" @click="$emit('close')">Начать</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.863);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  padding: 10px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-header,
.modal-body,
.modal-footer {
  margin: 0 30px;
}
</style>
