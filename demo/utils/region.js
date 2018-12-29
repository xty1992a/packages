// const region = require('./region.json');

const format = region => Object.keys(region).reduce((prev, key) => key === 'n' ? prev : [...prev, {value: key, label: region[key].n || region[key]}], []);

export default class Region {
  origin = null;
  provinceID = '1';
  cityID = '1';
  countryID = '1';

  get province() {
	if (!this.provinceID) return {};
	return this.origin[this.provinceID] || {};
  }

  get city() {
	if (!this.province.hasOwnProperty(this.cityID)) return {};
	return this.province[this.cityID];
  }

  get country() {
	if (!this.city.hasOwnProperty(this.countryID)) return {};
	return this.city[this.countryID];
  }

  constructor(data) {
	this.origin = data;
  }

  // 序列化的省市区列表,根据id动态变化.
  get provinces() {
	if (!this.origin) return [];
	return format(this.origin);
  }

  get cities() {
	if (!this.provinceID) return [];
	return format(this.province);
  }

  get countries() {
	if (!this.cityID) return [];
	return format(this.city);
  }

  // api
  pickProvince(id) {
	this.provinceID = id
  }

  pickCity(id) {
	this.cityID = id
  }

  pickCountry(id) {
	this.countryID = id
  }

  getLabel([pid, cid, yid]) {
	let p = this.origin[pid] || {};
	let c = p[cid] || {};
	let y = c[yid] || {};
	return `${p.n || '暂缺'}-${c.n || '暂缺'}-${y}`
  }
}

// const instance = new Region(region);

// console.log(instance);
