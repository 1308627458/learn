import { ref } from "vue";


export default function () {
  const show = ref(false)
  const showPop = ref(false)
  const isfogged = ref(false)
  const showLeft = ref(false)
  const showMain = ref(false)
  const Animate1 = ref('')
  const Animate2 = ref('')
  const Animate3 = ref('')
  const flag = ref(true)
  const isGone = ref(false)
  const className = ref('')
  const showLeftIcon = ref(true)
  const showBack = ref(false)
  const showCountDown = ref(true)
  const showStartBtn = ref(true)
  const rightIconStyle = ref('iconfont icon-yezi')
  const isMasked = ref(false)
  return {
    show, showPop, isfogged, showMain, showLeft, Animate1, Animate2, Animate3, flag, isGone, className, showLeftIcon, showBack, showCountDown, showStartBtn, rightIconStyle, isMasked
  }
}