const userMenuList = [
  { key: 'channelManagement', title: '渠道管理' },
  {
    key: 'platformDatabase',
    title: '平台资料库',
    children: [
      { key: 'qualificationGroup', title: '资质分组' },
      { key: 'qualificationManage', title: '资质管理' },
    ],
  },
  {
    key: 'platformCertStandards',
    title: '平台认证标准',
    children: [
      { key: 'enterpriseRealnameStandard', title: '企业实名标准' },
      { key: 'brandCertification', title: '品牌认证标准' },
      { key: 'qualificationReview', title: '资质审核标准' },
      { key: 'categoryGroupManage', title: '类目组管理' },
    ],
  },
  {
    key: 'enterpriseManage',
    title: '企业管理',
    children: [
      { key: 'enterpriseRealnameExamine', title: '企业实名审核' },
      { key: 'enterpriseIdentify', title: '企业身份认证管理' },
      { key: 'enterpriseControl', title: '企业管控' },
      { key: 'enterpriseUpdateExamine', title: '企业资料更新审核' },
    ],
  },
  {
    key: 'personManage',
    title: '个人管理',
    children: [{ key: 'personCertification', title: '个人实名认证' }],
  },
  { key: 'certification', title: '自定义认证模版管理' },
  { key: 'platformRoleManage', title: '平台角色管理' },
  { key: 'platformUserManage', title: '平台人员管理' },
  { key: 'brandExamine', title: '企业品牌审核' },
  {
    key: 'enterpriseLabelManage',
    title: '企业标签管理',
    children: [
      { key: 'LabelList', title: '标签列表' },
      { key: 'enterpriseLabelSet', title: '企业标签设置' },
    ],
  },
  {
    key: 'SapOrgManage',
    title: '新奥sap组织管理',
    children: [
      { key: 'enterpriseRealnameExamine', title: '企业实名审核' },
      { key: 'purchaseFactory', title: '采购工厂' },
      { key: 'purchaseOrgList', title: '采购组织列表' },
      { key: 'purchaseFacList', title: '采购工厂列表' },
      { key: 'inventoryList', title: '库存地列表' },
    ],
  },
  { key: 'supplierShopScore', title: '供应商店铺评分' },
  {
    key: 'shopmanage',
    title: '供应商店铺管理',
    children: [{ key: 'businessGrade', title: '供应商评级对比分析' }],
  },
  { key: 'expertAdministration', title: '专家管理' },
  {
    key: 'indexManage',
    title: '指标管理',
    children: [
      { key: 'firstIndexManage', title: '一级指标管理' },
      { key: 'secondIndexManage', title: '二级指标管理' },
    ],
  },
  {
    key: 'benefitManage',
    title: '权益管理',
    children: [
      { key: 'firstbenefitManage', title: '一级权益管理' },
      { key: 'secondbenefitManage', title: '二级权益管理' },
    ],
  },
  {
    key: 'platformGrade',
    title: '等级规则管理',
    children: [
      { key: 'gradeManage', title: '等级管理' },
      { key: 'dimensionManage', title: '维度管理' },
      { key: 'categoryScoreRuleManage', title: '类目评分规则管理' },
    ],
  },
  {
    key: 'supplierAdministration',
    title: '供应商管理',
    children: [{ key: 'supplierGrade', title: '供应商评级管理' }],
  },
];
export default userMenuList;
