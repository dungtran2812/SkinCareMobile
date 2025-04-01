const endpoints = {
	LOGIN: "/auth/login",
	REGISTER: "/auth/register",
	QUIZ_ANSWER: "/quiz-answer",
  QUIZ_QUESTION: "/quiz-question",
  CATEGORY: "/category",
  PRODUCT: "/product",
  SKINTYPE: "/skin-types",
  Cart: "/cart",
  Order: "/order",
  ROUTINE: "/routine",
  ORDER_GET_ALL: "/order/getAllOrder",
  ORDER_GET_BY_ID: "/order/getOrderById",
  ORDER_GET_BY_STATUS: "/order/getOrderByStatus",
  ORDER_CREATE: "/order/createOrder",
  ORDER_UPDATE_CANCEL: "/order/updateOrderCancel",
  PAYMENT_CREATE: "/payment/create",
  CHECK_PAYMENT: "/payment/check-payment",
};

export default endpoints;
