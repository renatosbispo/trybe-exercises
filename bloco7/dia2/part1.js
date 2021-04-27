const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliverTo = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phone = order.phoneNumber;
  const address1 = order.address.street;
  const address2 = order.address.number;
  const address3 = order.address.apartment;

  return `Olá ${deliverTo}, entrega para: ${name}, tel. ${phone}, ${address1}, nº ${address2}, ap. ${address3}`;
}

const getItemTotal = (itemName) => {
  const item = order.order[itemName];
  let itemTotal = 0;

  for(let subItem of Object.values(item)) {
    itemTotal += subItem.amount * subItem.price;
  }

  return itemTotal;
};

const getOrderTotal = (order) => {
  let orderTotal = 0;

  for (let item of Object.keys(order.order)) {
    if (item !== 'delivery') {
      orderTotal += getItemTotal(item);
    }
  }

  return orderTotal;
};

const getOrderItems = (order) => {
  const orderItems = [];
  const orderPizzas = order.order.pizza;
  const orderDrinks = order.order.drinks;

  orderItems.push(...Object.keys(orderPizzas));
  orderItems.push(...Object.values(orderDrinks).map(drink => drink.type));

  return orderItems;
}

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
}

orderModifier(order);