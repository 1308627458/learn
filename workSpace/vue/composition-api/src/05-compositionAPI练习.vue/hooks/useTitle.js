import { ref, watch, watchEffect } from "vue";

export default function (title = '默认title') {
  const titleRef = ref(title)

  watchEffect(() => {
    document.title = titleRef.value
  })


  return titleRef

}