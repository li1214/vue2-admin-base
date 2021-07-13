<template>
  <div class="vxi-editor">
    <vxi-editor ref="vxiEditor" :text="text" class="editor" />
    <el-button @click="getContent">获取富文本内容</el-button>
    <h2>富文本HTML内容</h2>
    <div class="content">
      {{ content }}
    </div>
    <h2>富文本TEXT内容</h2>
    <div class="content">
      {{ html2text(content) }}
    </div>
  </div>
</template>

<script>
import VxiEditor from '@/components/VxiEditor/index'
import { html2text } from '@/utils/index'
export default {
  components: {
    VxiEditor
  },
  data() {
    return {
      content: '',
      text: '<tb-jumbotron style="background-image:url(&quot;https:&#x2F;&#x2F;textbus.tanboui.com&#x2F;tbus-bg.jpg&quot;);background-size:cover;background-position:center center;min-height:300px"><h1 style="text-align:center;color:#ffffff">Hello, world!</h1><p style="text-align:center;color:#ffffff">你好，我是 富文本编辑器。</p><p style="text-align:center;font-family:&quot;Hiragino Sans GB&quot;, &quot;Microsoft Yahei&quot;, &quot;\\5FAE软雅黑&quot;, SimSun, &quot;\\5B8B体&quot;, Arial;font-size:18px;letter-spacing:1px;color:#ffffff"><br></p><p style="text-align:center"><span style="font-family:&quot;Hiragino Sans GB&quot;, &quot;Microsoft Yahei&quot;, &quot;\\5FAE软雅黑&quot;, SimSun, &quot;\\5B8B体&quot;, Arial;font-size:18px;letter-spacing:1px;color:#ffffff">[环球时报记者 &nbsp;乌元春]中国外交部发言人赵立坚主持7月12日的例行记者会。环球时报-环球网记者提问：彭博社日前发布新一期的“全球抗疫排</span><br></p></tb-jumbotron><h2>进度条</h2><tb-progress type="primary" max="100" min="0" progress="75"><span class="tb-progress-min">0</span><div style="width:75%"><span class="tb-progress-value">75%</span></div><span class="tb-progress-max">100</span></tb-progress><p><br></p><tb-progress type="warning" max="100" min="0" progress="50"><span class="tb-progress-min">0</span><div style="width:50%"><span class="tb-progress-value">50%</span></div><span class="tb-progress-max">100</span></tb-progress><p><br></p><tb-progress type="gray" max="100" min="0" progress="25"><span class="tb-progress-min">0</span><div style="width:25%"><span class="tb-progress-value">25%</span></div><span class="tb-progress-max">100</span></tb-progress><h2>步骤条</h2><tb-step step="2"><div class="tb-step-item tb-complete"><div class="tb-step-item-header"><div class="tb-step-item-line"></div><div class="tb-step-item-icon">1</div></div><div class="tb-step-item-content"><div><strong style="font-size:18px">标题</strong></div><p>描述信息...</p></div></div><div class="tb-step-item tb-complete"><div class="tb-step-item-header"><div class="tb-step-item-line"></div><div class="tb-step-item-icon">2</div></div><div class="tb-step-item-content"><div><strong style="font-size:18px">标题</strong></div><p>描述信息...</p></div></div><div class="tb-step-item tb-current"><div class="tb-step-item-header"><div class="tb-step-item-line"></div><div class="tb-step-item-icon">3</div></div><div class="tb-step-item-content"><div><strong style="font-size:18px">标题</strong></div><p>描述信息...</p></div></div><div class="tb-step-item tb-waiting"><div class="tb-step-item-header"><div class="tb-step-item-line"></div><div class="tb-step-item-icon">4</div></div><div class="tb-step-item-content"><div><strong style="font-size:18px">标题</strong></div><p>描述信息...</p></div></div></tb-step><h2>时间轴</h2><tb-timeline><div class="tb-timeline-item tb-timeline-item-primary"><div class="tb-timeline-line"></div><div class="tb-timeline-icon"></div><div class="tb-timeline-content"><div style="text-align:left"><strong style="font-size:18px">时间主题</strong><span style="font-size:15px;color:#777">&nbsp;2020-02-03</span></div><p style="text-align:left">描述信息...</p></div></div><div class="tb-timeline-item tb-timeline-item-primary"><div class="tb-timeline-line"></div><div class="tb-timeline-icon"></div><div style="text-align:left" class="tb-timeline-content"><div><strong style="font-size:18px">时间主题</strong><span style="font-size:15px;color:#777">&nbsp;2020-02-04</span></div><p>描述信息...</p></div></div><div class="tb-timeline-item tb-timeline-item-primary"><div class="tb-timeline-line"></div><div class="tb-timeline-icon"></div><div style="text-align:left" class="tb-timeline-content"><div><strong style="font-size:18px">时间主题</strong><span style="font-size:15px;color:#777">&nbsp;2020-02-05</span></div><p>描述信息...</p></div></div><div class="tb-timeline-item tb-timeline-item-primary"><div class="tb-timeline-line"></div><div class="tb-timeline-icon"></div><div class="tb-timeline-content"><div style="text-align:left"><strong style="font-size:18px">时间主题</strong><span style="font-size:15px;color:#777">&nbsp;2020-02-06</span></div><p style="text-align:left">描述信息...</p></div></div></tb-timeline><h2>待办事项列表</h2><tb-todo-list><div class="tb-todo-list-item"><div class="tb-todo-list-btn"><div class="tb-todo-list-state tb-todo-list-state-active"></div></div><div class="tb-todo-list-content">待办事项...</div></div><div class="tb-todo-list-item"><div class="tb-todo-list-btn"><div class="tb-todo-list-state"></div></div><div class="tb-todo-list-content">啥酒店好几块撒化</div></div><div class="tb-todo-list-item"><div class="tb-todo-list-btn"><div class="tb-todo-list-state"></div></div><div class="tb-todo-list-content">就看到撒娇零点开奖萨拉的</div></div><div class="tb-todo-list-item"><div class="tb-todo-list-btn"><div class="tb-todo-list-state"></div></div><div class="tb-todo-list-content">家里福建省拉克</div></div></tb-todo-list><h2>数学公式</h2><p><tb-katex source="%25%20%5Cf%20is%20defined%20as%20%231f(%232)%20using%20the%20macro%0A%5Cf%5Crelax%7Bx%7D%20%3D%20%5Cint_%7B-%5Cinfty%7D%5E%5Cinfty%0A%20%20%20%20%5Cf%5Chat%5Cxi%5C%2Ce%5E%7B2%20%5Cpi%20i%20%5Cxi%20x%7D%0A%20%20%20%20%5C%2Cd%5Cxi"><span class="katex-display"><span class="katex"><span aria-hidden="true" class="katex-html"><span class="base"><span style="height:1em;vertical-align:-0.25em" class="strut"></span><span style="margin-right:0.10764em" class="mord mathnormal">f</span><span class="mopen">(</span><span class="mord mathnormal">x</span><span class="mclose">)</span><span style="margin-right:0.2777777777777778em" class="mspace"></span><span class="mrel">=</span><span style="margin-right:0.2777777777777778em" class="mspace"></span></span><span class="base"><span style="height:2.384573em;vertical-align:-0.970281em" class="strut"></span><span class="mop"><span style="margin-right:0.44445em;position:relative;top:-0.0011249999999999316em" class="mop op-symbol large-op">∫</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span style="height:1.414292em" class="vlist"><span style="top:-1.7880500000000001em;margin-left:-0.44445em;margin-right:0.05em"><span style="height:2.7em" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">∞</span></span></span></span><span style="top:-3.8129000000000004em;margin-right:0.05em"><span style="height:2.7em" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">∞</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span style="height:0.970281em" class="vlist"><span></span></span></span></span></span></span><span style="margin-right:0.16666666666666666em" class="mspace"></span><span class="mord accent"><span class="vlist-t vlist-t2"><span class="vlist-r"><span style="height:0.9578799999999998em" class="vlist"><span style="top:-3em"><span style="height:3em" class="pstrut"></span><span style="margin-right:0.10764em" class="mord mathnormal">f</span></span><span style="top:-3.26344em"><span style="height:3em" class="pstrut"></span><span style="left:-0.08332999999999999em" class="accent-body"><span class="mord">^</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span style="height:0.19444em" class="vlist"><span></span></span></span></span></span><span class="mopen">(</span><span style="margin-right:0.04601em" class="mord mathnormal">ξ</span><span class="mclose">)</span><span style="margin-right:0.16666666666666666em" class="mspace"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span style="height:0.8991079999999999em" class="vlist"><span style="top:-3.1130000000000004em;margin-right:0.05em"><span style="height:2.7em" class="pstrut"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span><span class="mord mathnormal mtight">πi</span><span style="margin-right:0.04601em" class="mord mathnormal mtight">ξ</span><span class="mord mathnormal mtight">x</span></span></span></span></span></span></span></span></span><span style="margin-right:0.16666666666666666em" class="mspace"></span><span class="mord mathnormal">d</span><span style="margin-right:0.04601em" class="mord mathnormal">ξ</span></span></span></span></span></tb-katex><br></p><p><br></p>'
    }
  },
  methods: {
    html2text,
    getContent() {
      this.content = this.$refs.vxiEditor.getContent()
    }
  }
}
</script>
<style scoped lang="scss">
.vxi-editor{
  height: calc(100vh - 50px);
  overflow: auto;

  .editor{
    height: 480px;
    margin-bottom: 20px;
  }

  .content{
    border: 1px solid #ccc;
    line-height: 1.5;
    padding: 20px;
  }

}
</style>
