<template>
  <div class="picker-demo">
    <h3 class="title">基础用法</h3>
    <section>
      <ui-picker mask v-model="pickedState" :columns="stateList"/>
    </section>

    <h3 class="title">多列</h3>
    <section>
      <ui-picker mask v-model="pickedTime" :columns="timeList"/>
    </section>

    <h3 class="title">函数式调用</h3>
    <section>
      <ui-cell title="地区" :value="pickedRegion.join('-')" @click="pickState"/>
    </section>

    <h3 class="title">三级地址联动</h3>
    <section>
      <ui-cell title="地区" :value="addressLabel" @click="pickRegion"/>
    </section>
  </div>
</template>

<script>
import Region from "../utils/region";
// region helper
const fmt = v => ({ value: v, label: v }); // 格式化为picker所需格式
const fillFrom = offset => len => [...Array(len)].map((n, i) => i + offset);
const fillOne = fillFrom(1);
const fill1970 = fillFrom(1970);
const isLeap = year => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
const dayList = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const cities = {
  浙江: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
  福建: ["福州", "厦门", "莆田", "三明", "泉州"]
};

const getRegion = province => {
  let c1 = Object.keys(cities);
  let c2 = cities[province || c1[0]];
  return [c1, c2].map(arr => arr.map(fmt));
};

const getTime = ([year, month]) => {
  let dayCount = dayList[month - 1];
  if (isLeap(year) && month === 2) {
    dayCount = 28;
  }
  let c1 = fill1970(50).map(fmt);
  let c2 = fillOne(12).map(fmt);
  let c3 = fillOne(dayCount).map(fmt);
  return [c1, c2, c3];
};
// endregion

export default {
  name: "picker-demo",
  components: {},
  data() {
    return {
      pickedRegion: ["浙江", "杭州"],
      pickedTime: [2012, 3, 1],
      pickedAddress: ["1", "1", "1"],
      pickedState: ["USA"],
      regionInstance: null,
      stateList: [
        [
          { label: "美国", value: "USA" },
          { label: "中国", value: "China" },
          { label: "法国", value: "France" },
          { label: "俄国", value: "Russia" },
          { label: "日本", value: "Japan" }
        ]
      ]
    };
  },
  created() {
    import(/* webpackChunkName "region" */ "../utils/region.json")
      .then(res => {
        this.regionInstance = new Region(res.default);
      })
      .catch(console.log);
  },
  methods: {
    pickState() {
      this.$service
        .pickItem({
          value: this.pickedRegion,
          getColumns: value => getRegion(value[0])
        })
        .then(res => {
          this.pickedRegion = res;
        })
        .catch(console.log);
    },

    pickRegion() {
      if (!this.regionInstance) return;
      this.$service
        .pickItem({
          value: this.pickedAddress,
          getColumns: ([pid, cid, yid]) => {
            this.regionInstance.pickProvince(pid);
            this.regionInstance.pickCity(cid);
            this.regionInstance.pickCountry(yid);
            let { provinces, cities, countries } = this.regionInstance;
            return [provinces, cities, countries];
          }
        })
        .then(res => {
          this.pickedAddress = res;
        })
        .catch(console.log);
    }
  },
  computed: {
    timeList() {
      return getTime(this.pickedTime);
    },

    addressLabel() {
      if (!this.regionInstance) return "";
      return this.regionInstance.getLabel(this.pickedAddress);
    }
  },
  watch: {
    pickedState(now) {
      let labels = now.map(
        (val, index) => this.stateList[index].find(s => s.value === val).label
      );
      this.$message(`您选择了${labels.join(",")}`);
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less">
@import "../styles/variable";

.picker-demo {
  padding: 10px;
  background-color: #f7f7f7;

  section {
    .shadow;
    margin-bottom: 10px;
  }
}
</style>
