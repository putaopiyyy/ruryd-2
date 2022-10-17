<script lang="ts" setup>
import {ref,onMounted,onUnmounted} from 'vue'
import {useMouse} from '../hooks/mouse'
import {generateRectangleMeta,generateCircleMeta,generateLineMeta} from '../hooks/math'

defineProps<{msg:string}>()

const isOutRectangle=ref(false);
const isOutCircle=ref(false)
const cardOffset=ref({x:0,y:0})

const rectangle=generateRectangleMeta([100,100],200,100)
const circle = generateCircleMeta([200, 400], 100);
const line=generateLineMeta([100,200],[400,600])
</script>

<template>
    <section>
        <h3>{{ msg }}</h3>
        <div class="card">
            <div class="shape rectangle"
            :style="{
                left:rectangle.startPos[0]+'px',
                top:rectangle.startPos[1]+'px',
                width:rectangle.w+'px',
                height:rectangle.h+'px'
            }">
            </div>

            <div class="shape circle"
            :style="{
                left:circle.startPos[0]+'px',
                top:circle.startPos[1]+'px',
                width:2*circle.r+'px',
                height:2*circle.r+'px',
                borderRadius: '50%'
            }">
            </div>

            <div class="shape line"
            :style="{
                left:circle.startPos[0]+'px',
                top:circle.startPos[1]+'px',
                width:2*circle.r+'px',
                height:1+'px'
            }">
            </div>
        </div>
    </section>
    
</template>

<style lang="scss" scoped>
section .card{
    position: relative;
    padding: 2rem;
  height: 480px;
  margin: 16px;
  border-radius: 2px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  background-image: radial-gradient(rgba(9, 89, 194, 0.3) 6%, transparent 0),
    radial-gradient(#faf9f8 6%, transparent 0);
  background-size: 10px 10px;
  background-position: 0 0, 2px 2px;
}
.card{
    .shape {
        position: absolute;
        border: 1px solid #646cff;
        background-color: #fff;
    }
    .shape:hover{
        background: #646cff;
    }
    

}
</style>