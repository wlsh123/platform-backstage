const userMenuList = [
  { key: 'channelManagement', title: '渠道管理' },
  {
    key: 'platformDatabase',
    title: '平台资料库',
    children: [
      { key: 'platformDatabase/qualificationGroup', title: '资质分组' },
      { key: 'user/qualificationManage', title: '资质管理' },
    ],
  },
  {
    key: 'user/platformCertStandards',
    title: '平台认证标准',
    children: [
      { key: 'user/enterpriseRealnameStandard', title: '企业实名标准' },
      { key: 'user/brandCertification', title: '品牌认证标准' },
      { key: 'user/qualificationReview', title: '资质审核标准' },
      { key: 'user/categoryGroupManage', title: '类目组管理' },
    ],
  },
  {
    key: 'user/enterpriseManage',
    title: '企业管理',
    children: [
      { key: 'user/enterpriseRealnameExamine', title: '企业实名审核' },
      { key: 'user/enterpriseIdentify', title: '企业身份认证管理' },
      { key: 'user/enterpriseControl', title: '企业管控' },
      { key: 'user/enterpriseUpdateExamine', title: '企业资料更新审核' },
    ],
  },
  {
    key: 'user/personManage',
    title: '个人管理',
    children: [{ key: 'user/personCertification', title: '个人实名认证' }],
  },
  { key: 'user/certification', title: '自定义认证模版管理' },
  { key: 'user/platformRoleManage', title: '平台角色管理' },
  { key: 'user/platformUserManage', title: '平台人员管理' },
  { key: 'user/brandExamine', title: '企业品牌审核' },
  {
    key: 'user/enterpriseLabelManage',
    title: '企业标签管理',
    children: [
      { key: 'user/LabelList', title: '标签列表' },
      { key: 'user/enterpriseLabelSet', title: '企业标签设置' },
    ],
  },
  {
    key: 'user/SapOrgManage',
    title: '新奥sap组织管理',
    children: [
      { key: 'user/enterpriseRealnameExamine', title: '企业实名审核' },
      { key: 'user/purchaseFactory', title: '采购工厂' },
      { key: 'user/purchaseOrgList', title: '采购组织列表' },
      { key: 'user/purchaseFacList', title: '采购工厂列表' },
      { key: 'user/inventoryList', title: '库存地列表' },
    ],
  },
  { key: 'user/supplierShopScore', title: '供应商店铺评分' },
  {
    key: 'user/shopmanage',
    title: '供应商店铺管理',
    children: [{ key: 'user/businessGrade', title: '供应商评级对比分析' }],
  },
  { key: 'user/expertAdministration', title: '专家管理' },
  {
    key: 'user/indexManage',
    title: '指标管理',
    children: [
      { key: 'user/firstIndexManage', title: '一级指标管理' },
      { key: 'user/secondIndexManage', title: '二级指标管理' },
    ],
  },
  {
    key: 'user/benefitManage',
    title: '权益管理',
    children: [
      { key: 'user/firstbenefitManage', title: '一级权益管理' },
      { key: 'user/secondbenefitManage', title: '二级权益管理' },
    ],
  },
  {
    key: 'user/platformGrade',
    title: '等级规则管理',
    children: [
      { key: 'user/gradeManage', title: '等级管理' },
      { key: 'user/dimensionManage', title: '维度管理' },
      { key: 'user/categoryScoreRuleManage', title: '类目评分规则管理' },
    ],
  },
  {
    key: 'user/supplierAdministration',
    title: '供应商管理',
    children: [{ key: 'user/supplierGrade', title: '供应商评级管理' }],
  },
];
export default userMenuList;
