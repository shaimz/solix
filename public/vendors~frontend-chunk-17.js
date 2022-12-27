(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~frontend-chunk-17"],{"./node_modules/mobile-select/mobile-select.css":
/*!******************************************************!*\
  !*** ./node_modules/mobile-select/mobile-select.css ***!
  \******************************************************/
/*! no exports provided */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./node_modules/mobile-select/mobile-select.js (referenced with cjs require) */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./node_modules/mobile-select/mobile-select.css?")},"./node_modules/mobile-select/mobile-select.js":
/*!*****************************************************!*\
  !*** ./node_modules/mobile-select/mobile-select.js ***!
  \*****************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(module,exports,__webpack_require__){eval("/*!\r\n * mobileSelect.js\r\n * (c) 2017-present onlyhom\r\n * Released under the MIT License.\r\n */\n(function () {\n  __webpack_require__(/*! ./mobile-select.css */ \"./node_modules/mobile-select/mobile-select.css\");\n\n  function getClass(dom, string) {\n    return dom.getElementsByClassName(string);\n  } //构造器\n\n\n  function MobileSelect(config) {\n    this.mobileSelect;\n    this.wheelsData = config.wheels;\n    this.jsonType = false;\n    this.cascadeJsonData = [];\n    this.displayJson = [];\n    this.curValue = [];\n    this.curIndexArr = [];\n    this.cascade = false;\n    this.startY;\n    this.moveEndY;\n    this.moveY;\n    this.oldMoveY;\n    this.offset = 0;\n    this.offsetSum = 0;\n    this.oversizeBorder;\n    this.curDistance = [];\n    this.clickStatus = false;\n    this.isPC = true;\n    this.init(config);\n  }\n\n  MobileSelect.prototype = {\n    constructor: MobileSelect,\n    init: function (config) {\n      var _this = this;\n\n      if (config.wheels[0].data.length == 0) {\n        console.error('mobileSelect has been successfully installed, but the data is empty and cannot be initialized.');\n        return false;\n      }\n\n      _this.keyMap = config.keyMap ? config.keyMap : {\n        id: 'id',\n        value: 'value',\n        childs: 'childs'\n      };\n\n      _this.checkDataType();\n\n      _this.renderWheels(_this.wheelsData, config.cancelBtnText, config.ensureBtnText);\n\n      _this.trigger = document.querySelector(config.trigger);\n\n      if (!_this.trigger) {\n        console.error('mobileSelect has been successfully installed, but no trigger found on your page.');\n        return false;\n      }\n\n      _this.wheel = getClass(_this.mobileSelect, 'wheel');\n      _this.slider = getClass(_this.mobileSelect, 'selectContainer');\n      _this.wheels = _this.mobileSelect.querySelector('.wheels');\n      _this.liHeight = _this.mobileSelect.querySelector('li').offsetHeight;\n      _this.ensureBtn = _this.mobileSelect.querySelector('.ensure');\n      _this.cancelBtn = _this.mobileSelect.querySelector('.cancel');\n      _this.grayLayer = _this.mobileSelect.querySelector('.grayLayer');\n      _this.popUp = _this.mobileSelect.querySelector('.content');\n\n      _this.callback = config.callback || function () {};\n\n      _this.cancel = config.cancel || function () {};\n\n      _this.transitionEnd = config.transitionEnd || function () {};\n\n      _this.onShow = config.onShow || function () {};\n\n      _this.onHide = config.onHide || function () {};\n\n      _this.initPosition = config.position || [];\n      _this.titleText = config.title || '';\n      _this.connector = config.connector || ' ';\n      _this.triggerDisplayData = !(typeof config.triggerDisplayData == 'undefined') ? config.triggerDisplayData : true;\n      _this.trigger.style.cursor = 'pointer';\n\n      _this.setStyle(config);\n\n      _this.setTitle(_this.titleText);\n\n      _this.checkIsPC();\n\n      _this.checkCascade();\n\n      _this.addListenerAll();\n\n      if (_this.cascade) {\n        _this.initCascade();\n      } //定位 初始位置\n\n\n      if (_this.initPosition.length < _this.slider.length) {\n        var diff = _this.slider.length - _this.initPosition.length;\n\n        for (var i = 0; i < diff; i++) {\n          _this.initPosition.push(0);\n        }\n      }\n\n      _this.setCurDistance(_this.initPosition); //按钮监听\n\n\n      _this.cancelBtn.addEventListener('click', function () {\n        _this.hide();\n\n        _this.cancel(_this.curIndexArr, _this.curValue);\n      });\n\n      _this.ensureBtn.addEventListener('click', function () {\n        _this.hide();\n\n        if (!_this.liHeight) {\n          _this.liHeight = _this.mobileSelect.querySelector('li').offsetHeight;\n        }\n\n        var tempValue = '';\n\n        for (var i = 0; i < _this.wheel.length; i++) {\n          i == _this.wheel.length - 1 ? tempValue += _this.getInnerHtml(i) : tempValue += _this.getInnerHtml(i) + _this.connector;\n        }\n\n        if (_this.triggerDisplayData) {\n          _this.trigger.innerHTML = tempValue;\n        }\n\n        _this.curIndexArr = _this.getIndexArr();\n        _this.curValue = _this.getCurValue();\n\n        _this.callback(_this.curIndexArr, _this.curValue);\n      });\n\n      _this.trigger.addEventListener('click', function () {\n        _this.show();\n      });\n\n      _this.grayLayer.addEventListener('click', function () {\n        _this.hide();\n\n        _this.cancel(_this.curIndexArr, _this.curValue);\n      });\n\n      _this.popUp.addEventListener('click', function () {\n        event.stopPropagation();\n      });\n\n      _this.fixRowStyle(); //修正列数\n\n    },\n    setTitle: function (string) {\n      var _this = this;\n\n      _this.titleText = string;\n      _this.mobileSelect.querySelector('.title').innerHTML = _this.titleText;\n    },\n    setStyle: function (config) {\n      var _this = this;\n\n      if (config.ensureBtnColor) {\n        _this.ensureBtn.style.color = config.ensureBtnColor;\n      }\n\n      if (config.cancelBtnColor) {\n        _this.cancelBtn.style.color = config.cancelBtnColor;\n      }\n\n      if (config.titleColor) {\n        _this.title = _this.mobileSelect.querySelector('.title');\n        _this.title.style.color = config.titleColor;\n      }\n\n      if (config.textColor) {\n        _this.panel = _this.mobileSelect.querySelector('.panel');\n        _this.panel.style.color = config.textColor;\n      }\n\n      if (config.titleBgColor) {\n        _this.btnBar = _this.mobileSelect.querySelector('.btnBar');\n        _this.btnBar.style.backgroundColor = config.titleBgColor;\n      }\n\n      if (config.bgColor) {\n        _this.panel = _this.mobileSelect.querySelector('.panel');\n        _this.shadowMask = _this.mobileSelect.querySelector('.shadowMask');\n        _this.panel.style.backgroundColor = config.bgColor;\n        _this.shadowMask.style.background = 'linear-gradient(to bottom, ' + config.bgColor + ', rgba(255, 255, 255, 0), ' + config.bgColor + ')';\n      }\n\n      if (!isNaN(config.maskOpacity)) {\n        _this.grayMask = _this.mobileSelect.querySelector('.grayLayer');\n        _this.grayMask.style.background = 'rgba(0, 0, 0, ' + config.maskOpacity + ')';\n      }\n    },\n    checkIsPC: function () {\n      var _this = this;\n\n      var sUserAgent = navigator.userAgent.toLowerCase();\n      var bIsIpad = sUserAgent.match(/ipad/i) == \"ipad\";\n      var bIsIphoneOs = sUserAgent.match(/iphone os/i) == \"iphone os\";\n      var bIsMidp = sUserAgent.match(/midp/i) == \"midp\";\n      var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == \"rv:1.2.3.4\";\n      var bIsUc = sUserAgent.match(/ucweb/i) == \"ucweb\";\n      var bIsAndroid = sUserAgent.match(/android/i) == \"android\";\n      var bIsCE = sUserAgent.match(/windows ce/i) == \"windows ce\";\n      var bIsWM = sUserAgent.match(/windows mobile/i) == \"windows mobile\";\n\n      if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {\n        _this.isPC = false;\n      }\n    },\n    show: function () {\n      this.mobileSelect.classList.add('mobileSelect-show');\n\n      if (typeof this.onShow === 'function') {\n        this.onShow(this);\n      }\n    },\n    hide: function () {\n      this.mobileSelect.classList.remove('mobileSelect-show');\n\n      if (typeof this.onHide === 'function') {\n        this.onHide(this);\n      }\n    },\n    renderWheels: function (wheelsData, cancelBtnText, ensureBtnText) {\n      var _this = this;\n\n      var cancelText = cancelBtnText ? cancelBtnText : '取消';\n      var ensureText = ensureBtnText ? ensureBtnText : '确认';\n      _this.mobileSelect = document.createElement(\"div\");\n      _this.mobileSelect.className = \"mobileSelect\";\n      _this.mobileSelect.innerHTML = '<div class=\"grayLayer\"></div>' + '<div class=\"content\">' + '<div class=\"btnBar\">' + '<div class=\"fixWidth\">' + '<div class=\"cancel\">' + cancelText + '</div>' + '<div class=\"title\"></div>' + '<div class=\"ensure\">' + ensureText + '</div>' + '</div>' + '</div>' + '<div class=\"panel\">' + '<div class=\"fixWidth\">' + '<div class=\"wheels\">' + '</div>' + '<div class=\"selectLine\"></div>' + '<div class=\"shadowMask\"></div>' + '</div>' + '</div>' + '</div>';\n      document.body.appendChild(_this.mobileSelect); //根据数据长度来渲染\n\n      var tempHTML = '';\n\n      for (var i = 0; i < wheelsData.length; i++) {\n        //列\n        tempHTML += '<div class=\"wheel\"><ul class=\"selectContainer\">';\n\n        if (_this.jsonType) {\n          for (var j = 0; j < wheelsData[i].data.length; j++) {\n            //行\n            tempHTML += '<li data-id=\"' + wheelsData[i].data[j][_this.keyMap.id] + '\">' + wheelsData[i].data[j][_this.keyMap.value] + '</li>';\n          }\n        } else {\n          for (var j = 0; j < wheelsData[i].data.length; j++) {\n            //行\n            tempHTML += '<li>' + wheelsData[i].data[j] + '</li>';\n          }\n        }\n\n        tempHTML += '</ul></div>';\n      }\n\n      _this.mobileSelect.querySelector('.wheels').innerHTML = tempHTML;\n    },\n    addListenerAll: function () {\n      var _this = this;\n\n      for (var i = 0; i < _this.slider.length; i++) {\n        //手势监听\n        (function (i) {\n          _this.addListenerWheel(_this.wheel[i], i);\n        })(i);\n      }\n    },\n    addListenerWheel: function (theWheel, index) {\n      var _this = this;\n\n      theWheel.addEventListener('touchstart', function () {\n        _this.touch(event, this.firstChild, index);\n      }, false);\n      theWheel.addEventListener('touchend', function () {\n        _this.touch(event, this.firstChild, index);\n      }, false);\n      theWheel.addEventListener('touchmove', function () {\n        _this.touch(event, this.firstChild, index);\n      }, false);\n\n      if (_this.isPC) {\n        //如果是PC端则再增加拖拽监听 方便调试\n        theWheel.addEventListener('mousedown', function () {\n          _this.dragClick(event, this.firstChild, index);\n        }, false);\n        theWheel.addEventListener('mousemove', function () {\n          _this.dragClick(event, this.firstChild, index);\n        }, false);\n        theWheel.addEventListener('mouseup', function () {\n          _this.dragClick(event, this.firstChild, index);\n        }, true);\n      }\n    },\n    checkDataType: function () {\n      var _this = this;\n\n      if (typeof _this.wheelsData[0].data[0] == 'object') {\n        _this.jsonType = true;\n      }\n    },\n    checkCascade: function () {\n      var _this = this;\n\n      if (_this.jsonType) {\n        var node = _this.wheelsData[0].data;\n\n        for (var i = 0; i < node.length; i++) {\n          if (_this.keyMap.childs in node[i] && node[i][_this.keyMap.childs].length > 0) {\n            _this.cascade = true;\n            _this.cascadeJsonData = _this.wheelsData[0].data;\n            break;\n          }\n        }\n      } else {\n        _this.cascade = false;\n      }\n    },\n    generateArrData: function (targetArr) {\n      var tempArr = [];\n      var keyMap_id = this.keyMap.id;\n      var keyMap_value = this.keyMap.value;\n\n      for (var i = 0; i < targetArr.length; i++) {\n        var tempObj = {};\n        tempObj[keyMap_id] = targetArr[i][this.keyMap.id];\n        tempObj[keyMap_value] = targetArr[i][this.keyMap.value];\n        tempArr.push(tempObj);\n      }\n\n      return tempArr;\n    },\n    initCascade: function () {\n      var _this = this;\n\n      _this.displayJson.push(_this.generateArrData(_this.cascadeJsonData));\n\n      if (_this.initPosition.length > 0) {\n        _this.initDeepCount = 0;\n\n        _this.initCheckArrDeep(_this.cascadeJsonData[_this.initPosition[0]]);\n      } else {\n        _this.checkArrDeep(_this.cascadeJsonData[0]);\n      }\n\n      _this.reRenderWheels();\n    },\n    initCheckArrDeep: function (parent) {\n      var _this = this;\n\n      if (parent) {\n        if (_this.keyMap.childs in parent && parent[_this.keyMap.childs].length > 0) {\n          _this.displayJson.push(_this.generateArrData(parent[_this.keyMap.childs]));\n\n          _this.initDeepCount++;\n          var nextNode = parent[_this.keyMap.childs][_this.initPosition[_this.initDeepCount]];\n\n          if (nextNode) {\n            _this.initCheckArrDeep(nextNode);\n          } else {\n            _this.checkArrDeep(parent[_this.keyMap.childs][0]);\n          }\n        }\n      }\n    },\n    checkArrDeep: function (parent) {\n      //检测子节点深度  修改 displayJson\n      var _this = this;\n\n      if (parent) {\n        if (_this.keyMap.childs in parent && parent[_this.keyMap.childs].length > 0) {\n          _this.displayJson.push(_this.generateArrData(parent[_this.keyMap.childs])); //生成子节点数组\n\n\n          _this.checkArrDeep(parent[_this.keyMap.childs][0]); //检测下一个子节点\n\n        }\n      }\n    },\n    checkRange: function (index, posIndexArr) {\n      var _this = this;\n\n      var deleteNum = _this.displayJson.length - 1 - index;\n\n      for (var i = 0; i < deleteNum; i++) {\n        _this.displayJson.pop(); //修改 displayJson\n\n      }\n\n      var resultNode;\n\n      for (var i = 0; i <= index; i++) {\n        if (i == 0) resultNode = _this.cascadeJsonData[posIndexArr[0]];else {\n          resultNode = resultNode[_this.keyMap.childs][posIndexArr[i]];\n        }\n      }\n\n      _this.checkArrDeep(resultNode); //console.log(_this.displayJson);\n\n\n      _this.reRenderWheels();\n\n      _this.fixRowStyle();\n\n      _this.setCurDistance(_this.resetPosition(index, posIndexArr));\n    },\n    resetPosition: function (index, posIndexArr) {\n      var _this = this;\n\n      var tempPosArr = posIndexArr;\n      var tempCount;\n\n      if (_this.slider.length > posIndexArr.length) {\n        tempCount = _this.slider.length - posIndexArr.length;\n\n        for (var i = 0; i < tempCount; i++) {\n          tempPosArr.push(0);\n        }\n      } else if (_this.slider.length < posIndexArr.length) {\n        tempCount = posIndexArr.length - _this.slider.length;\n\n        for (var i = 0; i < tempCount; i++) {\n          tempPosArr.pop();\n        }\n      }\n\n      for (var i = index + 1; i < tempPosArr.length; i++) {\n        tempPosArr[i] = 0;\n      }\n\n      return tempPosArr;\n    },\n    reRenderWheels: function () {\n      var _this = this; //删除多余的wheel\n\n\n      if (_this.wheel.length > _this.displayJson.length) {\n        var count = _this.wheel.length - _this.displayJson.length;\n\n        for (var i = 0; i < count; i++) {\n          _this.wheels.removeChild(_this.wheel[_this.wheel.length - 1]);\n        }\n      }\n\n      for (var i = 0; i < _this.displayJson.length; i++) {\n        //列\n        (function (i) {\n          var tempHTML = '';\n\n          if (_this.wheel[i]) {\n            //console.log('插入Li');\n            for (var j = 0; j < _this.displayJson[i].length; j++) {\n              //行\n              tempHTML += '<li data-id=\"' + _this.displayJson[i][j][_this.keyMap.id] + '\">' + _this.displayJson[i][j][_this.keyMap.value] + '</li>';\n            }\n\n            _this.slider[i].innerHTML = tempHTML;\n          } else {\n            var tempWheel = document.createElement(\"div\");\n            tempWheel.className = \"wheel\";\n            tempHTML = '<ul class=\"selectContainer\">';\n\n            for (var j = 0; j < _this.displayJson[i].length; j++) {\n              //行\n              tempHTML += '<li data-id=\"' + _this.displayJson[i][j][_this.keyMap.id] + '\">' + _this.displayJson[i][j][_this.keyMap.value] + '</li>';\n            }\n\n            tempHTML += '</ul>';\n            tempWheel.innerHTML = tempHTML;\n\n            _this.addListenerWheel(tempWheel, i);\n\n            _this.wheels.appendChild(tempWheel);\n          } //_this.·(i);\n\n        })(i);\n      }\n    },\n    updateWheels: function (data) {\n      var _this = this;\n\n      if (_this.cascade) {\n        _this.cascadeJsonData = data;\n        _this.displayJson = [];\n\n        _this.initCascade();\n\n        if (_this.initPosition.length < _this.slider.length) {\n          var diff = _this.slider.length - _this.initPosition.length;\n\n          for (var i = 0; i < diff; i++) {\n            _this.initPosition.push(0);\n          }\n        }\n\n        _this.setCurDistance(_this.initPosition);\n\n        _this.fixRowStyle();\n      }\n    },\n    updateWheel: function (sliderIndex, data) {\n      var _this = this;\n\n      var tempHTML = '';\n\n      if (_this.cascade) {\n        console.error('级联格式不支持updateWheel(),请使用updateWheels()更新整个数据源');\n        return false;\n      } else if (_this.jsonType) {\n        for (var j = 0; j < data.length; j++) {\n          tempHTML += '<li data-id=\"' + data[j][_this.keyMap.id] + '\">' + data[j][_this.keyMap.value] + '</li>';\n        }\n\n        _this.wheelsData[sliderIndex] = {\n          data: data\n        };\n      } else {\n        for (var j = 0; j < data.length; j++) {\n          tempHTML += '<li>' + data[j] + '</li>';\n        }\n\n        _this.wheelsData[sliderIndex] = data;\n      }\n\n      _this.slider[sliderIndex].innerHTML = tempHTML;\n    },\n    fixRowStyle: function () {\n      var _this = this;\n\n      var width = (100 / _this.wheel.length).toFixed(2);\n\n      for (var i = 0; i < _this.wheel.length; i++) {\n        _this.wheel[i].style.width = width + '%';\n      }\n    },\n    getIndex: function (distance) {\n      return Math.round((2 * this.liHeight - distance) / this.liHeight);\n    },\n    getIndexArr: function () {\n      var _this = this;\n\n      var temp = [];\n\n      for (var i = 0; i < _this.curDistance.length; i++) {\n        temp.push(_this.getIndex(_this.curDistance[i]));\n      }\n\n      return temp;\n    },\n    getCurValue: function () {\n      var _this = this;\n\n      var temp = [];\n\n      var positionArr = _this.getIndexArr();\n\n      if (_this.cascade) {\n        for (var i = 0; i < _this.wheel.length; i++) {\n          temp.push(_this.displayJson[i][positionArr[i]]);\n        }\n      } else if (_this.jsonType) {\n        for (var i = 0; i < _this.curDistance.length; i++) {\n          temp.push(_this.wheelsData[i].data[_this.getIndex(_this.curDistance[i])]);\n        }\n      } else {\n        for (var i = 0; i < _this.curDistance.length; i++) {\n          temp.push(_this.getInnerHtml(i));\n        }\n      }\n\n      return temp;\n    },\n    getValue: function () {\n      return this.curValue;\n    },\n    calcDistance: function (index) {\n      return 2 * this.liHeight - index * this.liHeight;\n    },\n    setCurDistance: function (indexArr) {\n      var _this = this;\n\n      var temp = [];\n\n      for (var i = 0; i < _this.slider.length; i++) {\n        temp.push(_this.calcDistance(indexArr[i]));\n\n        _this.movePosition(_this.slider[i], temp[i]);\n      }\n\n      _this.curDistance = temp;\n    },\n    fixPosition: function (distance) {\n      return -(this.getIndex(distance) - 2) * this.liHeight;\n    },\n    movePosition: function (theSlider, distance) {\n      theSlider.style.webkitTransform = 'translate3d(0,' + distance + 'px, 0)';\n      theSlider.style.transform = 'translate3d(0,' + distance + 'px, 0)';\n    },\n    locatePosition: function (index, posIndex) {\n      var _this = this;\n\n      this.curDistance[index] = this.calcDistance(posIndex);\n      this.movePosition(this.slider[index], this.curDistance[index]);\n\n      if (_this.cascade) {\n        _this.checkRange(index, _this.getIndexArr());\n      }\n    },\n    updateCurDistance: function (theSlider, index) {\n      if (theSlider.style.transform) {\n        this.curDistance[index] = parseInt(theSlider.style.transform.split(',')[1]);\n      } else {\n        this.curDistance[index] = parseInt(theSlider.style.webkitTransform.split(',')[1]);\n      }\n    },\n    getDistance: function (theSlider) {\n      if (theSlider.style.transform) {\n        return parseInt(theSlider.style.transform.split(',')[1]);\n      } else {\n        return parseInt(theSlider.style.webkitTransform.split(',')[1]);\n      }\n    },\n    getInnerHtml: function (sliderIndex) {\n      var _this = this;\n\n      var index = _this.getIndex(_this.curDistance[sliderIndex]);\n\n      return _this.slider[sliderIndex].getElementsByTagName('li')[index].innerHTML;\n    },\n    touch: function (event, theSlider, index) {\n      var _this = this;\n\n      event = event || window.event;\n\n      switch (event.type) {\n        case \"touchstart\":\n          _this.startY = event.touches[0].clientY;\n          _this.startY = parseInt(_this.startY);\n          _this.oldMoveY = _this.startY;\n          break;\n\n        case \"touchend\":\n          _this.moveEndY = parseInt(event.changedTouches[0].clientY);\n          _this.offsetSum = _this.moveEndY - _this.startY;\n          _this.oversizeBorder = -(theSlider.getElementsByTagName('li').length - 3) * _this.liHeight;\n\n          if (_this.offsetSum == 0) {\n            //offsetSum为0,相当于点击事件\n            // 0 1 [2] 3 4\n            var clickOffetNum = parseInt((document.documentElement.clientHeight - _this.moveEndY) / 40);\n\n            if (clickOffetNum != 2) {\n              var offset = clickOffetNum - 2;\n              var newDistance = _this.curDistance[index] + offset * _this.liHeight;\n\n              if (newDistance <= 2 * _this.liHeight && newDistance >= _this.oversizeBorder) {\n                _this.curDistance[index] = newDistance;\n\n                _this.movePosition(theSlider, _this.curDistance[index]);\n\n                _this.transitionEnd(_this.getIndexArr(), _this.getCurValue());\n              }\n            }\n          } else {\n            //修正位置\n            _this.updateCurDistance(theSlider, index);\n\n            _this.curDistance[index] = _this.fixPosition(_this.curDistance[index]);\n\n            _this.movePosition(theSlider, _this.curDistance[index]); //反弹\n\n\n            if (_this.curDistance[index] + _this.offsetSum > 2 * _this.liHeight) {\n              _this.curDistance[index] = 2 * _this.liHeight;\n              setTimeout(function () {\n                _this.movePosition(theSlider, _this.curDistance[index]);\n              }, 100);\n            } else if (_this.curDistance[index] + _this.offsetSum < _this.oversizeBorder) {\n              _this.curDistance[index] = _this.oversizeBorder;\n              setTimeout(function () {\n                _this.movePosition(theSlider, _this.curDistance[index]);\n              }, 100);\n            }\n\n            _this.transitionEnd(_this.getIndexArr(), _this.getCurValue());\n          }\n\n          if (_this.cascade) {\n            _this.checkRange(index, _this.getIndexArr());\n          }\n\n          break;\n\n        case \"touchmove\":\n          event.preventDefault();\n          _this.moveY = event.touches[0].clientY;\n          _this.offset = _this.moveY - _this.oldMoveY;\n\n          _this.updateCurDistance(theSlider, index);\n\n          _this.curDistance[index] = _this.curDistance[index] + _this.offset;\n\n          _this.movePosition(theSlider, _this.curDistance[index]);\n\n          _this.oldMoveY = _this.moveY;\n          break;\n      }\n    },\n    dragClick: function (event, theSlider, index) {\n      var _this = this;\n\n      event = event || window.event;\n\n      switch (event.type) {\n        case \"mousedown\":\n          _this.startY = event.clientY;\n          _this.oldMoveY = _this.startY;\n          _this.clickStatus = true;\n          break;\n\n        case \"mouseup\":\n          _this.moveEndY = event.clientY;\n          _this.offsetSum = _this.moveEndY - _this.startY;\n          _this.oversizeBorder = -(theSlider.getElementsByTagName('li').length - 3) * _this.liHeight;\n\n          if (_this.offsetSum == 0) {\n            var clickOffetNum = parseInt((document.documentElement.clientHeight - _this.moveEndY) / 40);\n\n            if (clickOffetNum != 2) {\n              var offset = clickOffetNum - 2;\n              var newDistance = _this.curDistance[index] + offset * _this.liHeight;\n\n              if (newDistance <= 2 * _this.liHeight && newDistance >= _this.oversizeBorder) {\n                _this.curDistance[index] = newDistance;\n\n                _this.movePosition(theSlider, _this.curDistance[index]);\n\n                _this.transitionEnd(_this.getIndexArr(), _this.getCurValue());\n              }\n            }\n          } else {\n            //修正位置\n            _this.updateCurDistance(theSlider, index);\n\n            _this.curDistance[index] = _this.fixPosition(_this.curDistance[index]);\n\n            _this.movePosition(theSlider, _this.curDistance[index]); //反弹\n\n\n            if (_this.curDistance[index] + _this.offsetSum > 2 * _this.liHeight) {\n              _this.curDistance[index] = 2 * _this.liHeight;\n              setTimeout(function () {\n                _this.movePosition(theSlider, _this.curDistance[index]);\n              }, 100);\n            } else if (_this.curDistance[index] + _this.offsetSum < _this.oversizeBorder) {\n              _this.curDistance[index] = _this.oversizeBorder;\n              setTimeout(function () {\n                _this.movePosition(theSlider, _this.curDistance[index]);\n              }, 100);\n            }\n\n            _this.transitionEnd(_this.getIndexArr(), _this.getCurValue());\n          }\n\n          _this.clickStatus = false;\n\n          if (_this.cascade) {\n            _this.checkRange(index, _this.getIndexArr());\n          }\n\n          break;\n\n        case \"mousemove\":\n          event.preventDefault();\n\n          if (_this.clickStatus) {\n            _this.moveY = event.clientY;\n            _this.offset = _this.moveY - _this.oldMoveY;\n\n            _this.updateCurDistance(theSlider, index);\n\n            _this.curDistance[index] = _this.curDistance[index] + _this.offset;\n\n            _this.movePosition(theSlider, _this.curDistance[index]);\n\n            _this.oldMoveY = _this.moveY;\n          }\n\n          break;\n      }\n    }\n  };\n\n  if (true) {\n    module.exports = MobileSelect;\n  } else {}\n})();\n\n//# sourceURL=webpack:///./node_modules/mobile-select/mobile-select.js?")}}]);