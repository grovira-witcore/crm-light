module.exports = async function (knex) {
  await knex('countries').insert({
    country_id: 1,
    name: 'Argentina',
  });
  await knex('countries').insert({
    country_id: 2,
    name: 'Spain',
  });
  await knex('countries').insert({
    country_id: 3,
    name: 'Colombia',
  });
  await knex('countries').insert({
    country_id: 4,
    name: 'United States',
  });
  await knex('countries').insert({
    country_id: 5,
    name: 'Mexico',
  });
  await knex('countries').insert({
    country_id: 6,
    name: 'Costa Rica',
  });
  await knex('countries').insert({
    country_id: 7,
    name: 'Australia',
  });
  await knex('countries').insert({
    country_id: 8,
    name: 'Italy',
  });
  await knex('industries').insert({
    industry_id: 1,
    name: 'Automotive',
  });
  await knex('industries').insert({
    industry_id: 2,
    name: 'Technology',
  });
  await knex('industries').insert({
    industry_id: 3,
    name: 'Food & Beverage',
  });
  await knex('industries').insert({
    industry_id: 4,
    name: 'Clothing',
  });
  await knex('positions').insert({
    position_id: 1,
    name: 'Chief Executive Officer',
  });
  await knex('positions').insert({
    position_id: 2,
    name: 'Chief Financial Officer',
  });
  await knex('positions').insert({
    position_id: 3,
    name: 'Chief Operating Officer',
  });
  await knex('positions').insert({
    position_id: 4,
    name: 'Chief Technology Officer',
  });
  await knex('positions').insert({
    position_id: 5,
    name: 'Head of Engineering',
  });
  await knex('positions').insert({
    position_id: 6,
    name: 'Software Architect',
  });
  await knex('positions').insert({
    position_id: 7,
    name: 'IT Manager',
  });
  await knex('positions').insert({
    position_id: 8,
    name: 'Data Scientist',
  });
  await knex('teams').insert({
    team_id: 1,
    name: 'Team 1',
  });
  await knex('teams').insert({
    team_id: 2,
    name: 'Team 2',
  });
  await knex('teams').insert({
    team_id: 3,
    name: 'Team 3',
  });
  await knex('users').insert({
    user_id: 1,
    username: 'admin',
    first_name: 'Administrator',
    last_name: '',
    email: null,
    avatar: '/images/admin.png',
    enabled: true,
    team_id: null,
    last_interaction_datetime: null,
  });
  await knex('users').insert({
    user_id: 2,
    username: 'jsmith',
    first_name: 'John',
    last_name: 'Smith',
    email: 'jsmith@witcore.io',
    avatar: '/images/male-1.jpg',
    enabled: true,
    team_id: 1,
    last_interaction_datetime: new Date('2023-07-29T08:40:44.717Z'),
  });
  await knex('users').insert({
    user_id: 3,
    username: 'ejohnson',
    first_name: 'Emily',
    last_name: 'Johnson',
    email: 'ejohnson@witcore.io',
    avatar: '/images/female-1.jpg',
    enabled: true,
    team_id: 1,
    last_interaction_datetime: new Date('2023-07-29T08:40:44.717Z'),
  });
  await knex('users').insert({
    user_id: 4,
    username: 'mwilliams',
    first_name: 'Michael',
    last_name: 'Williams',
    email: 'mwilliams@witcore.io',
    avatar: '/images/male-2.jpg',
    enabled: true,
    team_id: 1,
    last_interaction_datetime: new Date('2023-07-29T08:40:44.717Z'),
  });
  await knex('users').insert({
    user_id: 5,
    username: 'sbrown',
    first_name: 'Sarah',
    last_name: 'Brown',
    email: 'sbrown@witcore.io',
    avatar: '/images/female-2.jpg',
    enabled: true,
    team_id: 1,
    last_interaction_datetime: new Date('2023-07-29T08:40:44.717Z'),
  });
  await knex('users').insert({
    user_id: 6,
    username: 'dwilson',
    first_name: 'David',
    last_name: 'Wilson',
    email: 'dwilson@witcore.io',
    avatar: '/images/male-3.jpg',
    enabled: true,
    team_id: 2,
    last_interaction_datetime: new Date('2023-07-29T08:40:44.717Z'),
  });
  await knex('users').insert({
    user_id: 7,
    username: 'ajones',
    first_name: 'Amelia',
    last_name: 'Jones',
    email: 'ajones@witcore.io',
    avatar: '/images/female-3.jpg',
    enabled: true,
    team_id: 2,
    last_interaction_datetime: new Date('2023-07-29T08:40:44.717Z'),
  });
  await knex('users').insert({
    user_id: 8,
    username: 'jtaylor',
    first_name: 'James',
    last_name: 'Taylor',
    email: 'jtaylor@witcore.io',
    avatar: '/images/male-4.jpg',
    enabled: true,
    team_id: 3,
    last_interaction_datetime: new Date('2023-07-29T08:40:44.717Z'),
  });
  await knex('users').insert({
    user_id: 9,
    username: 'jmartinez',
    first_name: 'Jessica',
    last_name: 'Martinez',
    email: 'jmartinez@witcore.io',
    avatar: '/images/female-4.jpg',
    enabled: true,
    team_id: 3,
    last_interaction_datetime: new Date('2023-07-29T08:40:44.717Z'),
  });
  await knex('users_roles').insert({
    user_role_id: 1,
    user_id: 1,
    role: 'administrator',
  });
  await knex('users_roles').insert({
    user_role_id: 2,
    user_id: 2,
    role: 'seller',
  });
  await knex('users_roles').insert({
    user_role_id: 3,
    user_id: 3,
    role: 'seller',
  });
  await knex('users_roles').insert({
    user_role_id: 4,
    user_id: 4,
    role: 'seller',
  });
  await knex('users_roles').insert({
    user_role_id: 5,
    user_id: 5,
    role: 'seller',
  });
  await knex('users_roles').insert({
    user_role_id: 6,
    user_id: 6,
    role: 'seller',
  });
  await knex('users_roles').insert({
    user_role_id: 7,
    user_id: 7,
    role: 'seller',
  });
  await knex('users_roles').insert({
    user_role_id: 8,
    user_id: 8,
    role: 'seller',
  });
  await knex('users_roles').insert({
    user_role_id: 9,
    user_id: 9,
    role: 'seller',
  });
  await knex('leads').insert({
    lead_id: 1,
    avatar: '/images/car-1.png',
    name: 'Mini Cooper',
    industry_id: 1,
    size: 'small',
    status: 'inProgress',
    probability: 0.2,
    team_id: 2,
    user_id: 6,
    linkedin: 'https://www.linkedin.com/company/mini',
    last_interaction_datetime: new Date('2023-07-29T08:40:44.717Z'),
  });
  await knex('leads').insert({
    lead_id: 2,
    avatar: '/images/car-2.png',
    name: 'Mitsubishi',
    industry_id: 1,
    size: 'large',
    status: 'lost',
    probability: 0,
    team_id: 3,
    user_id: 8,
    linkedin: 'https://www.linkedin.com/company/mitsubilit',
    last_interaction_datetime: new Date('2023-05-19T05:25:56.514Z'),
  });
  await knex('leads').insert({
    lead_id: 3,
    avatar: '/images/car-3.png',
    name: 'Citroen',
    industry_id: 1,
    size: 'large',
    status: 'new',
    probability: 0.1,
    team_id: 1,
    user_id: 5,
    linkedin: 'https://www.linkedin.com/company/citroen',
    last_interaction_datetime: null,
  });
  await knex('leads').insert({
    lead_id: 4,
    avatar: '/images/car-4.png',
    name: 'Nisan',
    industry_id: 1,
    size: 'large',
    status: 'won',
    probability: 1,
    team_id: 2,
    user_id: 7,
    linkedin: 'https://www.linkedin.com/company/nisan',
    last_interaction_datetime: new Date('2023-09-03T07:41:41.871Z'),
  });
  await knex('leads').insert({
    lead_id: 5,
    avatar: '/images/car-5.png',
    name: 'Subaru',
    industry_id: 1,
    size: 'medium',
    status: 'inProgress',
    probability: 0.6,
    team_id: 1,
    user_id: 4,
    linkedin: 'https://www.linkedin.com/company/subaru',
    last_interaction_datetime: new Date('2023-06-10T08:08:33.299Z'),
  });
  await knex('leads').insert({
    lead_id: 6,
    avatar: '/images/car-6.png',
    name: 'Mercedes Benz',
    industry_id: 1,
    size: 'corporative',
    status: 'lost',
    probability: 0,
    team_id: 2,
    user_id: 7,
    linkedin: 'https://www.linkedin.com/company/mercedes-benz',
    last_interaction_datetime: new Date('2023-11-15T05:24:27.649Z'),
  });
  await knex('leads').insert({
    lead_id: 7,
    avatar: '/images/car-7.png',
    name: 'Ford',
    industry_id: 1,
    size: 'corporative',
    status: 'new',
    probability: 0.1,
    team_id: 2,
    user_id: 7,
    linkedin: 'https://www.linkedin.com/company/ford',
    last_interaction_datetime: null,
  });
  await knex('leads').insert({
    lead_id: 8,
    avatar: '/images/car-8.png',
    name: 'Toyota',
    industry_id: 1,
    size: 'corporative',
    status: 'inProgress',
    probability: 0.8,
    team_id: 1,
    user_id: 4,
    linkedin: 'https://www.linkedin.com/company/toyota',
    last_interaction_datetime: new Date('2024-03-10T04:17:05.886Z'),
  });
  await knex('leads').insert({
    lead_id: 9,
    avatar: '/images/car-9.png',
    name: 'BMW',
    industry_id: 1,
    size: 'corporative',
    status: 'inProgress',
    probability: 0.4,
    team_id: 1,
    user_id: 2,
    linkedin: 'https://www.linkedin.com/company/bmw',
    last_interaction_datetime: new Date('2024-03-10T04:17:05.886Z'),
  });
  await knex('leads').insert({
    lead_id: 10,
    avatar: '/images/car-10.png',
    name: 'Volkswagen',
    industry_id: 1,
    size: 'corporative',
    status: 'inProgress',
    probability: 0.5,
    team_id: 1,
    user_id: 2,
    linkedin: 'https://www.linkedin.com/company/volkswagen',
    last_interaction_datetime: new Date('2024-03-10T04:17:05.886Z'),
  });
  await knex('leads').insert({
    lead_id: 11,
    avatar: '/images/car-11.png',
    name: 'Tesla',
    industry_id: 1,
    size: 'small',
    status: 'inProgress',
    probability: 0.3,
    team_id: 3,
    user_id: 8,
    linkedin: 'https://www.linkedin.com/company/tesla',
    last_interaction_datetime: new Date('2024-03-10T04:17:05.886Z'),
  });
  await knex('leads').insert({
    lead_id: 12,
    avatar: '/images/car-12.png',
    name: 'Land Rover',
    industry_id: 1,
    size: 'medium',
    status: 'inProgress',
    probability: 0.2,
    team_id: 2,
    user_id: 6,
    linkedin: 'https://www.linkedin.com/company/land-rover',
    last_interaction_datetime: new Date('2024-03-10T04:17:05.886Z'),
  });
  await knex('leads').insert({
    lead_id: 13,
    avatar: '/images/company-1.png',
    name: 'Vodafone',
    industry_id: 2,
    size: 'corporative',
    status: 'inProgress',
    probability: 0.2,
    team_id: 3,
    user_id: 8,
    linkedin: 'https://www.linkedin.com/company/vodafone',
    last_interaction_datetime: new Date('2023-07-29T08:40:44.717Z'),
  });
  await knex('leads').insert({
    lead_id: 14,
    avatar: '/images/company-2.png',
    name: 'Nokia',
    industry_id: 2,
    size: 'large',
    status: 'lost',
    probability: 0,
    team_id: 1,
    user_id: 4,
    linkedin: 'https://www.linkedin.com/company/nokia',
    last_interaction_datetime: new Date('2023-05-19T05:25:56.514Z'),
  });
  await knex('leads').insert({
    lead_id: 15,
    avatar: '/images/company-3.png',
    name: 'IBM',
    industry_id: 2,
    size: 'corporative',
    status: 'new',
    probability: 0.1,
    team_id: 3,
    user_id: 9,
    linkedin: 'https://www.linkedin.com/company/ibm',
    last_interaction_datetime: null,
  });
  await knex('leads').insert({
    lead_id: 16,
    avatar: '/images/company-4.png',
    name: 'Ericsson',
    industry_id: 2,
    size: 'corporative',
    status: 'won',
    probability: 1,
    team_id: 1,
    user_id: 3,
    linkedin: 'https://www.linkedin.com/company/ericsson',
    last_interaction_datetime: new Date('2023-09-03T07:41:41.871Z'),
  });
  await knex('leads').insert({
    lead_id: 17,
    avatar: '/images/company-5.png',
    name: 'Canon',
    industry_id: 2,
    size: 'corporative',
    status: 'inProgress',
    probability: 0.7,
    team_id: 1,
    user_id: 2,
    linkedin: 'https://www.linkedin.com/company/canon',
    last_interaction_datetime: new Date('2023-06-10T08:08:33.299Z'),
  });
  await knex('leads').insert({
    lead_id: 18,
    avatar: '/images/company-6.png',
    name: 'Acer',
    industry_id: 2,
    size: 'medium',
    status: 'lost',
    probability: 0,
    team_id: 1,
    user_id: 3,
    linkedin: 'https://www.linkedin.com/company/acer',
    last_interaction_datetime: new Date('2023-11-15T05:24:27.649Z'),
  });
  await knex('leads').insert({
    lead_id: 19,
    avatar: '/images/company-7.png',
    name: 'Starbucks',
    industry_id: 3,
    size: 'corporative',
    status: 'new',
    probability: 0.1,
    team_id: 2,
    user_id: 6,
    linkedin: 'https://www.linkedin.com/company/starbucks',
    last_interaction_datetime: null,
  });
  await knex('leads').insert({
    lead_id: 20,
    avatar: '/images/company-8.png',
    name: 'Pepsi',
    industry_id: 3,
    size: 'large',
    status: 'inProgress',
    probability: 0.9,
    team_id: 1,
    user_id: 3,
    linkedin: 'https://www.linkedin.com/company/pepsi',
    last_interaction_datetime: new Date('2024-03-10T04:17:05.886Z'),
  });
  await knex('leads').insert({
    lead_id: 21,
    avatar: '/images/company-9.png',
    name: 'McDonald\'s',
    industry_id: 3,
    size: 'large',
    status: 'inProgress',
    probability: 0.8,
    team_id: 1,
    user_id: 3,
    linkedin: 'https://www.linkedin.com/company/mcdonalds',
    last_interaction_datetime: new Date('2024-03-10T04:17:05.886Z'),
  });
  await knex('leads').insert({
    lead_id: 22,
    avatar: '/images/company-10.png',
    name: 'Coca-Cola',
    industry_id: 3,
    size: 'large',
    status: 'inProgress',
    probability: 0.8,
    team_id: 1,
    user_id: 5,
    linkedin: 'https://www.linkedin.com/company/cocacola',
    last_interaction_datetime: new Date('2024-03-10T04:17:05.886Z'),
  });
  await knex('leads').insert({
    lead_id: 23,
    avatar: '/images/company-11.png',
    name: 'Nike',
    industry_id: 4,
    size: 'corporative',
    status: 'inProgress',
    probability: 0.2,
    team_id: 1,
    user_id: 4,
    linkedin: 'https://www.linkedin.com/company/nike',
    last_interaction_datetime: new Date('2024-03-10T04:17:05.886Z'),
  });
  await knex('leads').insert({
    lead_id: 24,
    avatar: '/images/company-12.png',
    name: 'Adidas',
    industry_id: 4,
    size: 'corporative',
    status: 'inProgress',
    probability: 0.3,
    team_id: 2,
    user_id: 6,
    linkedin: 'https://www.linkedin.com/company/adidas',
    last_interaction_datetime: new Date('2024-03-10T04:17:05.886Z'),
  });
  await knex('lead_addresses').insert({
    lead_address_id: 1,
    lead_id: 8,
    street: '1753 SW 110TH TER',
    city: 'Davie',
    state: 'Florida',
    zip_code: '33324',
    country_id: 4,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 2,
    lead_id: 16,
    street: '4787 N Sunset Dr',
    city: 'Madrid',
    state: 'Madrid',
    zip_code: '28001',
    country_id: 2,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 3,
    lead_id: 2,
    street: '5678 E Sunrise Blvd',
    city: 'Bogotá',
    state: 'Cundinamarca',
    zip_code: '110111',
    country_id: 3,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 4,
    lead_id: 23,
    street: '987 W Ocean Blvd',
    city: 'Miami',
    state: 'Florida',
    zip_code: '33139',
    country_id: 4,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 5,
    lead_id: 14,
    street: '2468 S Ocean Dr',
    city: 'Barcelona',
    state: 'Catalonia',
    zip_code: '08039',
    country_id: 2,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 6,
    lead_id: 7,
    street: '13579 NE 23rd Ave',
    city: 'Buenos Aires',
    state: 'Buenos Aires',
    zip_code: '1000',
    country_id: 1,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 7,
    lead_id: 5,
    street: '3690 NW 21st St',
    city: 'Medellín',
    state: 'Antioquia',
    zip_code: '050021',
    country_id: 3,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 8,
    lead_id: 9,
    street: '753 E 17th St',
    city: 'Miami',
    state: 'Florida',
    zip_code: '33139',
    country_id: 4,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 9,
    lead_id: 3,
    street: '9876 SW 5th Ave',
    city: 'Barcelona',
    state: 'Catalonia',
    zip_code: '08039',
    country_id: 2,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 10,
    lead_id: 20,
    street: '6543 NW 12th St',
    city: 'Buenos Aires',
    state: 'Buenos Aires',
    zip_code: '1000',
    country_id: 1,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 11,
    lead_id: 11,
    street: '2468 E Main St',
    city: 'Medellín',
    state: 'Antioquia',
    zip_code: '050021',
    country_id: 3,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 12,
    lead_id: 17,
    street: '7531 S Broadway',
    city: 'Madrid',
    state: 'Madrid',
    zip_code: '28001',
    country_id: 2,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 13,
    lead_id: 22,
    street: '9632 N Collins Ave',
    city: 'Miami',
    state: 'Florida',
    zip_code: '33139',
    country_id: 4,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 14,
    lead_id: 15,
    street: '8527 W 3rd St',
    city: 'Buenos Aires',
    state: 'Buenos Aires',
    zip_code: '1000',
    country_id: 1,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 15,
    lead_id: 4,
    street: '7410 E Sunrise Blvd',
    city: 'Bogotá',
    state: 'Cundinamarca',
    zip_code: '110111',
    country_id: 3,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 16,
    lead_id: 6,
    street: '3698 S Ocean Dr',
    city: 'Barcelona',
    state: 'Catalonia',
    zip_code: '08039',
    country_id: 2,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 17,
    lead_id: 21,
    street: '1472 NE 8th St',
    city: 'Miami',
    state: 'Florida',
    zip_code: '33139',
    country_id: 4,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 18,
    lead_id: 13,
    street: '2587 NW 15th St',
    city: 'Madrid',
    state: 'Madrid',
    zip_code: '28001',
    country_id: 2,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 19,
    lead_id: 19,
    street: '9632 N Collins Ave',
    city: 'Buenos Aires',
    state: 'Buenos Aires',
    zip_code: '1000',
    country_id: 1,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 20,
    lead_id: 1,
    street: '6543 NW 12th St',
    city: 'Medellín',
    state: 'Antioquia',
    zip_code: '050021',
    country_id: 3,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 21,
    lead_id: 10,
    street: '2468 E Main St',
    city: 'Miami',
    state: 'Florida',
    zip_code: '33139',
    country_id: 4,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 22,
    lead_id: 24,
    street: '7531 S Broadway',
    city: 'Buenos Aires',
    state: 'Buenos Aires',
    zip_code: '1000',
    country_id: 1,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 23,
    lead_id: 12,
    street: '9632 N Collins Ave',
    city: 'Medellín',
    state: 'Antioquia',
    zip_code: '050021',
    country_id: 3,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 24,
    lead_id: 18,
    street: '8527 W 3rd St',
    city: 'Barcelona',
    state: 'Catalonia',
    zip_code: '08039',
    country_id: 2,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 25,
    lead_id: 8,
    street: '3698 S Ocean Dr',
    city: 'Miami',
    state: 'Florida',
    zip_code: '33139',
    country_id: 4,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 26,
    lead_id: 2,
    street: '1472 NE 8th St',
    city: 'Buenos Aires',
    state: 'Buenos Aires',
    zip_code: '1000',
    country_id: 1,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 27,
    lead_id: 16,
    street: '2587 NW 15th St',
    city: 'Bogotá',
    state: 'Cundinamarca',
    zip_code: '110111',
    country_id: 3,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 28,
    lead_id: 22,
    street: '9632 N Collins Ave',
    city: 'Madrid',
    state: 'Madrid',
    zip_code: '28001',
    country_id: 2,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 29,
    lead_id: 14,
    street: '7531 S Broadway',
    city: 'Miami',
    state: 'Florida',
    zip_code: '33139',
    country_id: 4,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 30,
    lead_id: 4,
    street: '9632 N Collins Ave',
    city: 'Buenos Aires',
    state: 'Buenos Aires',
    zip_code: '1000',
    country_id: 1,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 31,
    lead_id: 20,
    street: '6543 NW 12th St',
    city: 'Medellín',
    state: 'Antioquia',
    zip_code: '050021',
    country_id: 3,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 32,
    lead_id: 10,
    street: '2468 E Main St',
    city: 'Barcelona',
    state: 'Catalonia',
    zip_code: '08039',
    country_id: 2,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 33,
    lead_id: 23,
    street: '7531 S Broadway',
    city: 'Miami',
    state: 'Florida',
    zip_code: '33139',
    country_id: 4,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 34,
    lead_id: 15,
    street: '9632 N Collins Ave',
    city: 'Buenos Aires',
    state: 'Buenos Aires',
    zip_code: '1000',
    country_id: 1,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 35,
    lead_id: 5,
    street: '8527 W 3rd St',
    city: 'Medellín',
    state: 'Antioquia',
    zip_code: '050021',
    country_id: 3,
  });
  await knex('lead_addresses').insert({
    lead_address_id: 36,
    lead_id: 21,
    street: '9632 N Collins Ave',
    city: 'Barcelona',
    state: 'Catalonia',
    zip_code: '08039',
    country_id: 2,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 1,
    lead_id: 9,
    avatar: '/images/dummy.jpg',
    first_name: 'John',
    last_name: 'Smith',
    phone_number: '555-890-1234',
    email: 'jsmith@example.com',
    position_id: 4,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 2,
    lead_id: 20,
    avatar: '/images/dummy.jpg',
    first_name: 'Emma',
    last_name: 'Johnson',
    phone_number: '555-678-5678',
    email: 'ejohnson@example.com',
    position_id: 2,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 3,
    lead_id: 5,
    avatar: '/images/dummy.jpg',
    first_name: 'Michael',
    last_name: 'Williams',
    phone_number: '555-456-7890',
    email: 'mwilliams@example.com',
    position_id: 6,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 4,
    lead_id: 14,
    avatar: '/images/dummy.jpg',
    first_name: 'Olivia',
    last_name: 'Brown',
    phone_number: '555-234-5678',
    email: 'obrown@example.com',
    position_id: 8,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 5,
    lead_id: 23,
    avatar: '/images/dummy.jpg',
    first_name: 'James',
    last_name: 'Jones',
    phone_number: '555-890-1234',
    email: 'jjones@example.com',
    position_id: 1,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 6,
    lead_id: 3,
    avatar: '/images/dummy.jpg',
    first_name: 'Sophia',
    last_name: 'Davis',
    phone_number: '555-345-6789',
    email: 'sdavis@example.com',
    position_id: 5,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 7,
    lead_id: 17,
    avatar: '/images/dummy.jpg',
    first_name: 'William',
    last_name: 'Miller',
    phone_number: '555-789-0123',
    email: 'wmiller@example.com',
    position_id: 3,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 8,
    lead_id: 11,
    avatar: '/images/dummy.jpg',
    first_name: 'Ava',
    last_name: 'Wilson',
    phone_number: '555-234-5678',
    email: 'awilson@example.com',
    position_id: 7,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 9,
    lead_id: 4,
    avatar: '/images/dummy.jpg',
    first_name: 'Alexander',
    last_name: 'Taylor',
    phone_number: '555-678-9012',
    email: 'ataylor@example.com',
    position_id: 2,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 10,
    lead_id: 18,
    avatar: '/images/dummy.jpg',
    first_name: 'Mia',
    last_name: 'Anderson',
    phone_number: '555-456-7890',
    email: 'manderson@example.com',
    position_id: 4,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 11,
    lead_id: 6,
    avatar: '/images/dummy.jpg',
    first_name: 'Ethan',
    last_name: 'Martinez',
    phone_number: '555-890-1234',
    email: 'emartinez@example.com',
    position_id: 8,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 12,
    lead_id: 15,
    avatar: '/images/dummy.jpg',
    first_name: 'Charlotte',
    last_name: 'Thompson',
    phone_number: '555-234-5678',
    email: 'cthompson@example.com',
    position_id: 1,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 13,
    lead_id: 21,
    avatar: '/images/dummy.jpg',
    first_name: 'Benjamin',
    last_name: 'Lewis',
    phone_number: '555-678-9012',
    email: 'blewis@example.com',
    position_id: 3,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 14,
    lead_id: 7,
    avatar: '/images/dummy.jpg',
    first_name: 'Amelia',
    last_name: 'Clark',
    phone_number: '555-345-6789',
    email: 'aclark@example.com',
    position_id: 5,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 15,
    lead_id: 12,
    avatar: '/images/dummy.jpg',
    first_name: 'Mia',
    last_name: 'King',
    phone_number: '555-789-0123',
    email: 'mking@example.com',
    position_id: 6,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 16,
    lead_id: 22,
    avatar: '/images/dummy.jpg',
    first_name: 'Oliver',
    last_name: 'White',
    phone_number: '555-123-4567',
    email: 'owhite@example.com',
    position_id: 4,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 17,
    lead_id: 8,
    avatar: '/images/dummy.jpg',
    first_name: 'Sophia',
    last_name: 'Scott',
    phone_number: '555-678-9012',
    email: 'sscott@example.com',
    position_id: 2,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 18,
    lead_id: 19,
    avatar: '/images/dummy.jpg',
    first_name: 'Alexander',
    last_name: 'Green',
    phone_number: '555-234-5678',
    email: 'agreen@example.com',
    position_id: 7,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 19,
    lead_id: 2,
    avatar: '/images/dummy.jpg',
    first_name: 'Isabella',
    last_name: 'Hill',
    phone_number: '555-567-8901',
    email: 'ihill@example.com',
    position_id: 1,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 20,
    lead_id: 10,
    avatar: '/images/dummy.jpg',
    first_name: 'William',
    last_name: 'Adams',
    phone_number: '555-123-4567',
    email: 'wadams@example.com',
    position_id: 5,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 21,
    lead_id: 24,
    avatar: '/images/dummy.jpg',
    first_name: 'Emily',
    last_name: 'Baker',
    phone_number: '555-789-0123',
    email: 'ebaker@example.com',
    position_id: 8,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 22,
    lead_id: 13,
    avatar: '/images/dummy.jpg',
    first_name: 'Olivia',
    last_name: 'Murphy',
    phone_number: '555-345-6789',
    email: 'omurphy@example.com',
    position_id: 3,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 23,
    lead_id: 3,
    avatar: '/images/dummy.jpg',
    first_name: 'James',
    last_name: 'Butler',
    phone_number: '555-567-8901',
    email: 'jbutler@example.com',
    position_id: 6,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 24,
    lead_id: 16,
    avatar: '/images/dummy.jpg',
    first_name: 'Sophia',
    last_name: 'Davis',
    phone_number: '555-123-4567',
    email: 'sdavis@example.com',
    position_id: 4,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 25,
    lead_id: 5,
    avatar: '/images/dummy.jpg',
    first_name: 'William',
    last_name: 'Martinez',
    phone_number: '555-789-0123',
    email: 'wmartinez@example.com',
    position_id: 2,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 26,
    lead_id: 14,
    avatar: '/images/dummy.jpg',
    first_name: 'Olivia',
    last_name: 'Clark',
    phone_number: '555-567-8901',
    email: 'oclark@example.com',
    position_id: 7,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 27,
    lead_id: 9,
    avatar: '/images/dummy.jpg',
    first_name: 'James',
    last_name: 'White',
    phone_number: '555-345-6789',
    email: 'jwhite@example.com',
    position_id: 1,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 28,
    lead_id: 17,
    avatar: '/images/dummy.jpg',
    first_name: 'Emma',
    last_name: 'Anderson',
    phone_number: '555-678-9012',
    email: 'eanderson@example.com',
    position_id: 5,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 29,
    lead_id: 7,
    avatar: '/images/dummy.jpg',
    first_name: 'Alexander',
    last_name: 'Murphy',
    phone_number: '555-234-5678',
    email: 'amurphy@example.com',
    position_id: 8,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 30,
    lead_id: 22,
    avatar: '/images/dummy.jpg',
    first_name: 'Ava',
    last_name: 'Wilson',
    phone_number: '555-789-0123',
    email: 'awilson@example.com',
    position_id: 3,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 31,
    lead_id: 11,
    avatar: '/images/dummy.jpg',
    first_name: 'Ethan',
    last_name: 'Mitchell',
    phone_number: '555-678-9012',
    email: 'emitchell@example.com',
    position_id: 4,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 32,
    lead_id: 15,
    avatar: '/images/dummy.jpg',
    first_name: 'Mia',
    last_name: 'Perez',
    phone_number: '555-234-5678',
    email: 'mperez@example.com',
    position_id: 6,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 33,
    lead_id: 1,
    avatar: '/images/dummy.jpg',
    first_name: 'James',
    last_name: 'Carter',
    phone_number: '555-890-1234',
    email: 'jcarter@example.com',
    position_id: 7,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 34,
    lead_id: 20,
    avatar: '/images/dummy.jpg',
    first_name: 'Olivia',
    last_name: 'Evans',
    phone_number: '555-567-8901',
    email: 'oevans@example.com',
    position_id: 3,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 35,
    lead_id: 8,
    avatar: '/images/dummy.jpg',
    first_name: 'William',
    last_name: 'Murphy',
    phone_number: '555-789-0123',
    email: 'wmurphy@example.com',
    position_id: 2,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 36,
    lead_id: 14,
    avatar: '/images/dummy.jpg',
    first_name: 'Emma',
    last_name: 'Reed',
    phone_number: '555-123-4567',
    email: 'ereed@example.com',
    position_id: 5,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 37,
    lead_id: 3,
    avatar: '/images/dummy.jpg',
    first_name: 'Alexander',
    last_name: 'Price',
    phone_number: '555-678-9012',
    email: 'aprice@example.com',
    position_id: 1,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 38,
    lead_id: 12,
    avatar: '/images/dummy.jpg',
    first_name: 'Sophia',
    last_name: 'Bailey',
    phone_number: '555-890-1234',
    email: 'sbailey@example.com',
    position_id: 4,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 39,
    lead_id: 19,
    avatar: '/images/dummy.jpg',
    first_name: 'Benjamin',
    last_name: 'Perry',
    phone_number: '555-234-5678',
    email: 'bperry@example.com',
    position_id: 8,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 40,
    lead_id: 6,
    avatar: '/images/dummy.jpg',
    first_name: 'Amelia',
    last_name: 'Ross',
    phone_number: '555-567-8901',
    email: 'aross@example.com',
    position_id: 2,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 41,
    lead_id: 22,
    avatar: '/images/dummy.jpg',
    first_name: 'Oliver',
    last_name: 'Gibson',
    phone_number: '555-789-0123',
    email: 'ogibson@example.com',
    position_id: 6,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 42,
    lead_id: 4,
    avatar: '/images/dummy.jpg',
    first_name: 'Mia',
    last_name: 'Myers',
    phone_number: '555-123-4567',
    email: 'mmyers@example.com',
    position_id: 5,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 43,
    lead_id: 13,
    avatar: '/images/dummy.jpg',
    first_name: 'William',
    last_name: 'Chavez',
    phone_number: '555-678-9012',
    email: 'wchavez@example.com',
    position_id: 1,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 44,
    lead_id: 18,
    avatar: '/images/dummy.jpg',
    first_name: 'Emily',
    last_name: 'Jordan',
    phone_number: '555-890-1234',
    email: 'ejordan@example.com',
    position_id: 7,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 45,
    lead_id: 7,
    avatar: '/images/dummy.jpg',
    first_name: 'James',
    last_name: 'Hanson',
    phone_number: '555-234-5678',
    email: 'jhanson@example.com',
    position_id: 3,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 46,
    lead_id: 16,
    avatar: '/images/dummy.jpg',
    first_name: 'Emma',
    last_name: 'Kelley',
    phone_number: '555-567-8901',
    email: 'ekelley@example.com',
    position_id: 4,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 47,
    lead_id: 2,
    avatar: '/images/dummy.jpg',
    first_name: 'Alexander',
    last_name: 'Fuller',
    phone_number: '555-789-0123',
    email: 'afuller@example.com',
    position_id: 8,
  });
  await knex('lead_contacts').insert({
    lead_contact_id: 48,
    lead_id: 17,
    avatar: '/images/dummy.jpg',
    first_name: 'Olivia',
    last_name: 'Wagner',
    phone_number: '555-123-4567',
    email: 'owagner@example.com',
    position_id: 2,
  });
  await knex('meetings').insert({
    meeting_id: 1,
    lead_id: 17,
    datetime: new Date('2024-07-02T12:05:57.213Z'),
    subject: 'Meeting with Potential Client',
    remarks: 'Discussed project details and next steps.',
    status: 'pending',
  });
  await knex('meetings').insert({
    meeting_id: 2,
    lead_id: 9,
    datetime: new Date('2023-06-15T09:23:42.500Z'),
    subject: 'Proposal Presentation',
    remarks: 'Presented our services and pricing.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 3,
    lead_id: 5,
    datetime: new Date('2024-06-28T15:17:10.123Z'),
    subject: 'Follow-up Meeting',
    remarks: 'Checked on progress and addressed concerns.',
    status: 'pending',
  });
  await knex('meetings').insert({
    meeting_id: 4,
    lead_id: 21,
    datetime: new Date('2024-07-05T10:45:00.000Z'),
    subject: 'Contract Negotiation',
    remarks: 'Negotiated terms and conditions.',
    status: 'pending',
  });
  await knex('meetings').insert({
    meeting_id: 5,
    lead_id: 12,
    datetime: new Date('2023-07-10T08:00:00.000Z'),
    subject: 'Strategy Discussion',
    remarks: 'Discussed marketing strategies.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 6,
    lead_id: 3,
    datetime: new Date('2023-06-20T14:30:00.000Z'),
    subject: 'Initial Meeting',
    remarks: 'Introduced our services and solutions.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 7,
    lead_id: 18,
    datetime: new Date('2023-06-10T16:45:00.000Z'),
    subject: 'Sales Pitch',
    remarks: 'Pitched new product features.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 8,
    lead_id: 11,
    datetime: new Date('2024-07-12T11:30:00.000Z'),
    subject: 'Client Onboarding',
    remarks: 'Onboarded new client accounts.',
    status: 'pending',
  });
  await knex('meetings').insert({
    meeting_id: 9,
    lead_id: 8,
    datetime: new Date('2023-06-25T09:00:00.000Z'),
    subject: 'Follow-up Call',
    remarks: 'Followed up on previous discussion.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 10,
    lead_id: 14,
    datetime: new Date('2024-07-01T14:00:00.000Z'),
    subject: 'Product Training',
    remarks: 'Trained clients on using our products.',
    status: 'pending',
  });
  await knex('meetings').insert({
    meeting_id: 11,
    lead_id: 20,
    datetime: new Date('2023-07-20T10:00:00.000Z'),
    subject: 'Quarterly Review',
    remarks: 'Reviewed quarterly performance.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 12,
    lead_id: 7,
    datetime: new Date('2023-06-18T15:30:00.000Z'),
    subject: 'Marketing Strategy Meeting',
    remarks: 'Discussed upcoming marketing campaigns.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 13,
    lead_id: 2,
    datetime: new Date('2023-06-28T09:30:00.000Z'),
    subject: 'Initial Consultation',
    remarks: 'Assessed client needs and requirements.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 14,
    lead_id: 23,
    datetime: new Date('2023-07-08T16:00:00.000Z'),
    subject: 'Budget Discussion',
    remarks: 'Discussed budget allocation for projects.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 15,
    lead_id: 19,
    datetime: new Date('2024-07-15T11:00:00.000Z'),
    subject: 'Lead Follow-up',
    remarks: 'Followed up on leads generated.',
    status: 'pending',
  });
  await knex('meetings').insert({
    meeting_id: 16,
    lead_id: 4,
    datetime: new Date('2023-06-22T10:30:00.000Z'),
    subject: 'Client Feedback Session',
    remarks: 'Gathered feedback on services.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 17,
    lead_id: 16,
    datetime: new Date('2023-07-05T14:45:00.000Z'),
    subject: 'Strategy Alignment Meeting',
    remarks: 'Aligned strategies with client goals.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 18,
    lead_id: 1,
    datetime: new Date('2023-06-10T08:00:00.000Z'),
    subject: 'Introductory Call',
    remarks: 'Introduced company services.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 19,
    lead_id: 10,
    datetime: new Date('2023-06-29T13:00:00.000Z'),
    subject: 'Project Kickoff',
    remarks: 'Kicked off new project initiatives.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 20,
    lead_id: 15,
    datetime: new Date('2023-07-03T09:30:00.000Z'),
    subject: 'Account Review',
    remarks: 'Reviewed client account performance.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 21,
    lead_id: 22,
    datetime: new Date('2024-07-12T14:00:00.000Z'),
    subject: 'Market Research Meeting',
    remarks: 'Discussed market trends and analysis.',
    status: 'pending',
  });
  await knex('meetings').insert({
    meeting_id: 22,
    lead_id: 13,
    datetime: new Date('2023-06-30T10:00:00.000Z'),
    subject: 'Solution Demo',
    remarks: 'Demonstrated our solutions to clients.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 23,
    lead_id: 6,
    datetime: new Date('2023-06-15T11:00:00.000Z'),
    subject: 'Follow-up Email',
    remarks: 'Sent follow-up email to client.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 24,
    lead_id: 24,
    datetime: new Date('2023-07-18T15:30:00.000Z'),
    subject: 'Strategy Workshop',
    remarks: 'Conducted workshop on strategic planning.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 25,
    lead_id: 17,
    datetime: new Date('2024-07-25T09:00:00.000Z'),
    subject: 'Client Survey',
    remarks: 'Conducted client satisfaction survey.',
    status: 'pending',
  });
  await knex('meetings').insert({
    meeting_id: 26,
    lead_id: 9,
    datetime: new Date('2023-07-05T13:00:00.000Z'),
    subject: 'Contract Renewal Discussion',
    remarks: 'Discussed terms for contract renewal.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 27,
    lead_id: 5,
    datetime: new Date('2023-06-27T14:30:00.000Z'),
    subject: 'Strategy Session',
    remarks: 'Brainstormed new strategies.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 28,
    lead_id: 21,
    datetime: new Date('2023-07-10T10:00:00.000Z'),
    subject: 'Client Meeting',
    remarks: 'Met with client to discuss project updates.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 29,
    lead_id: 12,
    datetime: new Date('2023-07-08T12:30:00.000Z'),
    subject: 'Team Collaboration',
    remarks: 'Collaborated with team on project tasks.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 30,
    lead_id: 3,
    datetime: new Date('2023-06-23T16:00:00.000Z'),
    subject: 'Strategy Review',
    remarks: 'Reviewed and analyzed current strategies.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 31,
    lead_id: 18,
    datetime: new Date('2023-06-29T09:00:00.000Z'),
    subject: 'Product Discussion',
    remarks: 'Discussed product enhancements.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 32,
    lead_id: 11,
    datetime: new Date('2023-07-20T11:30:00.000Z'),
    subject: 'Marketing Campaign Planning',
    remarks: 'Planned upcoming marketing campaigns.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 33,
    lead_id: 8,
    datetime: new Date('2023-07-04T14:00:00.000Z'),
    subject: 'Client Relationship Review',
    remarks: 'Reviewed client relationships and feedback.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 34,
    lead_id: 14,
    datetime: new Date('2023-07-11T09:00:00.000Z'),
    subject: 'Product Demo',
    remarks: 'Demoed product features to clients.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 35,
    lead_id: 20,
    datetime: new Date('2023-07-28T10:00:00.000Z'),
    subject: 'Quarterly Business Review',
    remarks: 'Reviewed quarterly business performance.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 36,
    lead_id: 7,
    datetime: new Date('2023-06-19T15:00:00.000Z'),
    subject: 'Follow-up Meeting',
    remarks: 'Followed up on previous meeting discussions.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 37,
    lead_id: 2,
    datetime: new Date('2023-06-25T11:30:00.000Z'),
    subject: 'Lead Follow-up Call',
    remarks: 'Followed up on potential leads.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 38,
    lead_id: 23,
    datetime: new Date('2023-07-16T13:00:00.000Z'),
    subject: 'Strategy Alignment Session',
    remarks: 'Aligned strategies with client expectations.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 39,
    lead_id: 19,
    datetime: new Date('2023-07-22T10:30:00.000Z'),
    subject: 'Business Development Meeting',
    remarks: 'Discussed business growth strategies.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 40,
    lead_id: 4,
    datetime: new Date('2023-06-26T14:45:00.000Z'),
    subject: 'Client Consultation',
    remarks: 'Consulted with client on project scope.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 41,
    lead_id: 16,
    datetime: new Date('2023-07-15T16:00:00.000Z'),
    subject: 'Product Feedback Session',
    remarks: 'Gathered feedback on product features.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 42,
    lead_id: 1,
    datetime: new Date('2023-06-13T09:30:00.000Z'),
    subject: 'Solution Presentation',
    remarks: 'Presented solutions to client needs.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 43,
    lead_id: 10,
    datetime: new Date('2023-07-03T11:00:00.000Z'),
    subject: 'Project Progress Review',
    remarks: 'Reviewed project progress and milestones.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 44,
    lead_id: 15,
    datetime: new Date('2023-07-17T14:30:00.000Z'),
    subject: 'Account Strategy Meeting',
    remarks: 'Discussed account management strategies.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 45,
    lead_id: 22,
    datetime: new Date('2023-07-24T12:00:00.000Z'),
    subject: 'Market Analysis Discussion',
    remarks: 'Analyzed market trends and competition.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 46,
    lead_id: 13,
    datetime: new Date('2023-07-02T13:30:00.000Z'),
    subject: 'Solution Deployment Meeting',
    remarks: 'Discussed deployment strategies with client.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 47,
    lead_id: 6,
    datetime: new Date('2023-06-16T10:00:00.000Z'),
    subject: 'Follow-up Meeting',
    remarks: 'Followed up on previous action items.',
    status: 'completed',
  });
  await knex('meetings').insert({
    meeting_id: 48,
    lead_id: 24,
    datetime: new Date('2023-07-30T11:30:00.000Z'),
    subject: 'Strategic Planning Session',
    remarks: 'Planned long-term strategic initiatives.',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 1,
    user_id: 2,
    lead_id: 3,
    start_date: new Date('2024-10-20T00:00:00.000Z'),
    due_date: new Date('2025-04-09T00:00:00.000Z'),
    subject: 'Implementation of new functionality',
    remarks: 'Review user interface to enhance customer experience',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 2,
    user_id: 4,
    lead_id: 8,
    start_date: new Date('2024-11-15T00:00:00.000Z'),
    due_date: new Date('2025-04-25T00:00:00.000Z'),
    subject: 'Optimization of internal processes',
    remarks: 'Automate repetitive tasks to increase efficiency',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 3,
    user_id: 5,
    lead_id: 10,
    start_date: new Date('2024-12-05T00:00:00.000Z'),
    due_date: new Date('2025-05-15T00:00:00.000Z'),
    subject: 'Development of marketing strategy',
    remarks: 'Explore new market opportunities to increase sales',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 4,
    user_id: 3,
    lead_id: 17,
    start_date: new Date('2025-01-10T00:00:00.000Z'),
    due_date: new Date('2025-05-30T00:00:00.000Z'),
    subject: 'Product launch',
    remarks: 'Prepare launch campaign to maximize product visibility',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 5,
    user_id: 5,
    lead_id: 9,
    start_date: new Date('2025-02-02T00:00:00.000Z'),
    due_date: new Date('2025-06-10T00:00:00.000Z'),
    subject: 'Team training',
    remarks: 'Train the team on new technologies to improve performance',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 6,
    user_id: 4,
    lead_id: 14,
    start_date: new Date('2025-02-20T00:00:00.000Z'),
    due_date: new Date('2025-06-30T00:00:00.000Z'),
    subject: 'Digital marketing campaign',
    remarks: 'Design online advertising strategies to increase traffic',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 7,
    user_id: 5,
    lead_id: 22,
    start_date: new Date('2025-03-15T00:00:00.000Z'),
    due_date: new Date('2025-07-10T00:00:00.000Z'),
    subject: 'Review of internal policies',
    remarks: 'Update company policies to meet current standards',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 8,
    user_id: 3,
    lead_id: 5,
    start_date: new Date('2025-04-05T00:00:00.000Z'),
    due_date: new Date('2025-07-20T00:00:00.000Z'),
    subject: 'User experience improvement',
    remarks: 'Implement changes in the interface for a better user experience',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 9,
    user_id: 4,
    lead_id: 16,
    start_date: new Date('2025-05-01T00:00:00.000Z'),
    due_date: new Date('2025-08-05T00:00:00.000Z'),
    subject: 'Development of new products',
    remarks: 'Research and develop new products to expand the offering',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 10,
    user_id: 5,
    lead_id: 3,
    start_date: new Date('2025-05-20T00:00:00.000Z'),
    due_date: new Date('2025-08-15T00:00:00.000Z'),
    subject: 'Customer loyalty strategy',
    remarks: 'Design loyalty programs to retain existing customers',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 11,
    user_id: 6,
    lead_id: 1,
    start_date: new Date('2025-06-10T00:00:00.000Z'),
    due_date: new Date('2025-09-05T00:00:00.000Z'),
    subject: 'Data analysis',
    remarks: 'Analyze data to identify trends and business opportunities',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 12,
    user_id: 7,
    lead_id: 6,
    start_date: new Date('2025-06-25T00:00:00.000Z'),
    due_date: new Date('2025-09-20T00:00:00.000Z'),
    subject: 'Content creation',
    remarks: 'Develop creative content for marketing campaigns',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 13,
    user_id: 7,
    lead_id: 24,
    start_date: new Date('2025-07-15T00:00:00.000Z'),
    due_date: new Date('2025-10-10T00:00:00.000Z'),
    subject: 'Implementation of new technologies',
    remarks: 'Integrate new technologies to improve operational efficiency',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 14,
    user_id: 6,
    lead_id: 7,
    start_date: new Date('2025-08-02T00:00:00.000Z'),
    due_date: new Date('2025-10-25T00:00:00.000Z'),
    subject: 'Sales strategy development',
    remarks: 'Design sales strategies to increase conversion',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 15,
    user_id: 6,
    lead_id: 4,
    start_date: new Date('2025-08-20T00:00:00.000Z'),
    due_date: new Date('2025-11-05T00:00:00.000Z'),
    subject: 'Market research',
    remarks: 'Conduct market research to identify opportunities',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 16,
    user_id: 7,
    lead_id: 7,
    start_date: new Date('2025-09-05T00:00:00.000Z'),
    due_date: new Date('2025-11-20T00:00:00.000Z'),
    subject: 'Communication strategy',
    remarks: 'Develop communication strategies to reach new markets',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 17,
    user_id: 6,
    lead_id: 19,
    start_date: new Date('2025-09-25T00:00:00.000Z'),
    due_date: new Date('2025-12-10T00:00:00.000Z'),
    subject: 'Organizational restructuring',
    remarks: 'Analyze and reorganize organizational structure for greater efficiency',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 18,
    user_id: 7,
    lead_id: 12,
    start_date: new Date('2025-10-10T00:00:00.000Z'),
    due_date: new Date('2025-12-25T00:00:00.000Z'),
    subject: 'Branding strategy development',
    remarks: 'Create branding strategies to increase brand visibility',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 19,
    user_id: 9,
    lead_id: 13,
    start_date: new Date('2025-11-05T00:00:00.000Z'),
    due_date: new Date('2026-01-10T00:00:00.000Z'),
    subject: 'Staff training',
    remarks: 'Train staff in new skills to improve performance',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 20,
    user_id: 8,
    lead_id: 2,
    start_date: new Date('2025-11-20T00:00:00.000Z'),
    due_date: new Date('2026-01-25T00:00:00.000Z'),
    subject: 'Research and development',
    remarks: 'Conduct research and development for new products',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 21,
    user_id: 2,
    lead_id: 16,
    start_date: new Date('2024-10-10T00:00:00.000Z'),
    due_date: new Date('2025-04-15T00:00:00.000Z'),
    subject: 'Data analysis platform development',
    remarks: 'Design and implement a platform for analyzing large volumes of data',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 22,
    user_id: 3,
    lead_id: 14,
    start_date: new Date('2024-11-05T00:00:00.000Z'),
    due_date: new Date('2025-05-10T00:00:00.000Z'),
    subject: 'Multichannel marketing strategy',
    remarks: 'Create a marketing strategy that encompasses multiple communication channels',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 23,
    user_id: 4,
    lead_id: 21,
    start_date: new Date('2025-01-15T00:00:00.000Z'),
    due_date: new Date('2025-06-20T00:00:00.000Z'),
    subject: 'Project management system implementation',
    remarks: 'Deploy an efficient system for managing internal projects',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 24,
    user_id: 5,
    lead_id: 5,
    start_date: new Date('2025-02-10T00:00:00.000Z'),
    due_date: new Date('2025-07-15T00:00:00.000Z'),
    subject: 'Digital content strategy',
    remarks: 'Design and execute an effective content strategy for digital platforms',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 25,
    user_id: 6,
    lead_id: 12,
    start_date: new Date('2025-03-05T00:00:00.000Z'),
    due_date: new Date('2025-08-10T00:00:00.000Z'),
    subject: 'Mobile app development',
    remarks: 'Create an innovative mobile app to improve user experience',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 26,
    user_id: 7,
    lead_id: 4,
    start_date: new Date('2025-03-25T00:00:00.000Z'),
    due_date: new Date('2025-08-30T00:00:00.000Z'),
    subject: 'Email marketing strategy',
    remarks: 'Design an effective email marketing strategy to increase conversion',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 27,
    user_id: 8,
    lead_id: 13,
    start_date: new Date('2025-04-20T00:00:00.000Z'),
    due_date: new Date('2025-09-25T00:00:00.000Z'),
    subject: 'CRM system implementation',
    remarks: 'Deploy a customized CRM system to improve customer management',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 28,
    user_id: 9,
    lead_id: 2,
    start_date: new Date('2025-05-15T00:00:00.000Z'),
    due_date: new Date('2025-10-20T00:00:00.000Z'),
    subject: 'Online sales strategy development',
    remarks: 'Create an effective online sales strategy to increase revenue',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 29,
    user_id: 2,
    lead_id: 3,
    start_date: new Date('2025-06-05T00:00:00.000Z'),
    due_date: new Date('2025-11-10T00:00:00.000Z'),
    subject: 'Website optimization',
    remarks: 'Improve website usability and performance to increase conversion',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 30,
    user_id: 3,
    lead_id: 18,
    start_date: new Date('2025-07-01T00:00:00.000Z'),
    due_date: new Date('2025-12-05T00:00:00.000Z'),
    subject: 'Social media strategy development',
    remarks: 'Create a social media strategy to increase brand visibility',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 31,
    user_id: 4,
    lead_id: 3,
    start_date: new Date('2025-07-25T00:00:00.000Z'),
    due_date: new Date('2025-12-30T00:00:00.000Z'),
    subject: 'Website performance analysis',
    remarks: 'Evaluate and improve website performance for a better user experience',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 32,
    user_id: 5,
    lead_id: 18,
    start_date: new Date('2025-08-15T00:00:00.000Z'),
    due_date: new Date('2026-01-20T00:00:00.000Z'),
    subject: 'Content marketing strategy development',
    remarks: 'Create an engaging content marketing strategy for the audience',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 33,
    user_id: 6,
    lead_id: 7,
    start_date: new Date('2025-09-10T00:00:00.000Z'),
    due_date: new Date('2026-02-15T00:00:00.000Z'),
    subject: 'Online advertising strategy',
    remarks: 'Design an effective online advertising strategy to reach new customers',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 34,
    user_id: 7,
    lead_id: 19,
    start_date: new Date('2025-10-05T00:00:00.000Z'),
    due_date: new Date('2026-03-10T00:00:00.000Z'),
    subject: 'E-learning platform development',
    remarks: 'Create an innovative e-learning platform for staff training',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 35,
    user_id: 8,
    lead_id: 2,
    start_date: new Date('2025-11-01T00:00:00.000Z'),
    due_date: new Date('2026-04-05T00:00:00.000Z'),
    subject: 'Marketing automation',
    remarks: 'Implement marketing automation tools for streamlined campaigns',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 36,
    user_id: 9,
    lead_id: 15,
    start_date: new Date('2025-11-25T00:00:00.000Z'),
    due_date: new Date('2026-05-01T00:00:00.000Z'),
    subject: 'Customer support system implementation',
    remarks: 'Deploy a customer support system for improved service delivery',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 37,
    user_id: 2,
    lead_id: 17,
    start_date: new Date('2026-01-05T00:00:00.000Z'),
    due_date: new Date('2026-06-10T00:00:00.000Z'),
    subject: 'Customer support system implementation',
    remarks: 'Deploy a customer support system for improved service delivery',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 38,
    user_id: 3,
    lead_id: 21,
    start_date: new Date('2026-01-05T00:00:00.000Z'),
    due_date: new Date('2026-06-20T00:00:00.000Z'),
    subject: 'Market segmentation analysis',
    remarks: 'Analyze market segments for targeted marketing campaigns',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 39,
    user_id: 4,
    lead_id: 9,
    start_date: new Date('2026-01-30T00:00:00.000Z'),
    due_date: new Date('2026-07-10T00:00:00.000Z'),
    subject: 'Inventory management system implementation',
    remarks: 'Implement an inventory management system for better control',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 40,
    user_id: 5,
    lead_id: 22,
    start_date: new Date('2026-02-20T00:00:00.000Z'),
    due_date: new Date('2026-08-05T00:00:00.000Z'),
    subject: 'Quality assurance process optimization',
    remarks: 'Streamline quality assurance processes for improved efficiency',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 41,
    user_id: 6,
    lead_id: 12,
    start_date: new Date('2026-03-15T00:00:00.000Z'),
    due_date: new Date('2026-08-20T00:00:00.000Z'),
    subject: 'Cross-platform app development',
    remarks: 'Develop an app that works seamlessly across multiple platforms',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 42,
    user_id: 7,
    lead_id: 6,
    start_date: new Date('2026-04-05T00:00:00.000Z'),
    due_date: new Date('2026-09-05T00:00:00.000Z'),
    subject: 'Online reputation management',
    remarks: 'Manage and improve online reputation for better brand perception',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 43,
    user_id: 8,
    lead_id: 2,
    start_date: new Date('2026-04-25T00:00:00.000Z'),
    due_date: new Date('2026-09-25T00:00:00.000Z'),
    subject: 'Market research survey',
    remarks: 'Conduct a survey to gather insights for market research',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 44,
    user_id: 9,
    lead_id: 11,
    start_date: new Date('2026-05-15T00:00:00.000Z'),
    due_date: new Date('2026-10-10T00:00:00.000Z'),
    subject: 'Customer feedback analysis',
    remarks: 'Analyze customer feedback to improve products and services',
    status: 'completed',
  });
  await knex('tasks').insert({
    task_id: 45,
    user_id: 9,
    lead_id: 15,
    start_date: new Date('2026-06-05T00:00:00.000Z'),
    due_date: new Date('2026-11-05T00:00:00.000Z'),
    subject: 'Social media advertising campaign',
    remarks: 'Launch a targeted social media advertising campaign',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 46,
    user_id: 3,
    lead_id: 20,
    start_date: new Date('2026-06-30T00:00:00.000Z'),
    due_date: new Date('2026-11-20T00:00:00.000Z'),
    subject: 'Sales forecast analysis',
    remarks: 'Analyze sales data to forecast future trends and performance',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 47,
    user_id: 4,
    lead_id: 10,
    start_date: new Date('2026-07-25T00:00:00.000Z'),
    due_date: new Date('2026-12-05T00:00:00.000Z'),
    subject: 'Product pricing strategy',
    remarks: 'Develop a competitive pricing strategy for products',
    status: 'pending',
  });
  await knex('tasks').insert({
    task_id: 48,
    user_id: 5,
    lead_id: 16,
    start_date: new Date('2026-08-10T00:00:00.000Z'),
    due_date: new Date('2026-12-20T00:00:00.000Z'),
    subject: 'Email newsletter campaign',
    remarks: 'Create and launch an engaging email newsletter campaign',
    status: 'pending',
  });
  await knex('interactions').insert({
    interaction_id: 1,
    datetime: new Date('2023-02-18T10:15:32.428Z'),
    user_id: 2,
    lead_id: 6,
    lead_contact_id: 11,
    type: 'phoneCall',
    subject: 'New Product Demo',
    remarks: 'Discussed new features and benefits',
    probability_change: null,
  });
  await knex('interactions').insert({
    interaction_id: 2,
    datetime: new Date('2023-01-05T15:20:10.102Z'),
    user_id: 3,
    lead_id: 16,
    lead_contact_id: 24,
    type: 'email',
    subject: 'Follow-Up Proposal',
    remarks: 'Sent detailed proposal for review',
    probability_change: 0.12,
  });
  await knex('interactions').insert({
    interaction_id: 3,
    datetime: new Date('2023-03-10T08:45:57.673Z'),
    user_id: 4,
    lead_id: 22,
    lead_contact_id: 30,
    type: 'meeting',
    subject: 'Contract Negotiation',
    remarks: 'Negotiated terms and conditions',
    probability_change: -0.25,
  });
  await knex('interactions').insert({
    interaction_id: 4,
    datetime: new Date('2023-05-28T14:32:46.891Z'),
    user_id: 6,
    lead_id: 7,
    lead_contact_id: 14,
    type: 'textMessage',
    subject: 'Event Invitation',
    remarks: 'Invited to upcoming industry event',
    probability_change: null,
  });
  await knex('interactions').insert({
    interaction_id: 5,
    datetime: new Date('2023-04-30T09:55:20.755Z'),
    user_id: 2,
    lead_id: 18,
    lead_contact_id: 44,
    type: 'phoneCall',
    subject: 'Feedback Collection',
    remarks: 'Gathered feedback on our services',
    probability_change: -0.08,
  });
  await knex('interactions').insert({
    interaction_id: 6,
    datetime: new Date('2023-06-15T11:18:39.516Z'),
    user_id: 3,
    lead_id: 10,
    lead_contact_id: 20,
    type: 'meeting',
    subject: 'Strategic Planning Session',
    remarks: 'Discussed long-term goals and strategies',
    probability_change: 0.21,
  });
  await knex('interactions').insert({
    interaction_id: 7,
    datetime: new Date('2023-02-05T17:30:08.624Z'),
    user_id: 6,
    lead_id: 24,
    lead_contact_id: 21,
    type: 'email',
    subject: 'Marketing Campaign Update',
    remarks: 'Provided update on ongoing campaign',
    probability_change: null,
  });
  await knex('interactions').insert({
    interaction_id: 8,
    datetime: new Date('2023-01-20T13:45:12.930Z'),
    user_id: 5,
    lead_id: 21,
    lead_contact_id: 13,
    type: 'phoneCall',
    subject: 'Service Enhancement',
    remarks: 'Implemented new service features',
    probability_change: 0.33,
  });
  await knex('interactions').insert({
    interaction_id: 9,
    datetime: new Date('2023-03-18T16:10:55.311Z'),
    user_id: 2,
    lead_id: 23,
    lead_contact_id: 5,
    type: 'meeting',
    subject: 'Customer Success Review',
    remarks: 'Reviewed satisfaction and next steps',
    probability_change: -0.02,
  });
  await knex('interactions').insert({
    interaction_id: 10,
    datetime: new Date('2023-07-12T09:38:27.748Z'),
    user_id: 6,
    lead_id: 1,
    lead_contact_id: 33,
    type: 'email',
    subject: 'Onboarding Instructions',
    remarks: 'Sent detailed onboarding instructions',
    probability_change: null,
  });
  await knex('interactions').insert({
    interaction_id: 11,
    datetime: new Date('2023-04-03T14:22:11.002Z'),
    user_id: 8,
    lead_id: 2,
    lead_contact_id: 19,
    type: 'textMessage',
    subject: 'Product Update',
    remarks: 'Informed about recent product updates',
    probability_change: 0.17,
  });
  await knex('interactions').insert({
    interaction_id: 12,
    datetime: new Date('2023-06-28T11:55:36.720Z'),
    user_id: 5,
    lead_id: 12,
    lead_contact_id: 38,
    type: 'meeting',
    subject: 'Quarterly Review',
    remarks: 'Reviewed performance and goals',
    probability_change: -0.11,
  });
  await knex('interactions').insert({
    interaction_id: 13,
    datetime: new Date('2023-05-15T10:08:43.215Z'),
    user_id: 8,
    lead_id: 15,
    lead_contact_id: 32,
    type: 'email',
    subject: 'Partnership Proposal',
    remarks: 'Sent proposal for collaboration',
    probability_change: null,
  });
  await knex('interactions').insert({
    interaction_id: 14,
    datetime: new Date('2023-03-30T14:40:59.812Z'),
    user_id: 6,
    lead_id: 4,
    lead_contact_id: 42,
    type: 'phoneCall',
    subject: 'Account Update',
    remarks: 'Updated account information',
    probability_change: -0.31,
  });
  await knex('interactions').insert({
    interaction_id: 15,
    datetime: new Date('2023-08-05T08:59:05.537Z'),
    user_id: 4,
    lead_id: 17,
    lead_contact_id: 7,
    type: 'meeting',
    subject: 'Market Analysis',
    remarks: 'Discussed market trends and analysis',
    probability_change: 0.29,
  });
  await knex('interactions').insert({
    interaction_id: 16,
    datetime: new Date('2023-09-18T16:25:49.039Z'),
    user_id: 5,
    lead_id: 20,
    lead_contact_id: 2,
    type: 'email',
    subject: 'Survey Feedback',
    remarks: 'Gathered feedback through survey',
    probability_change: 0.06,
  });
  await knex('interactions').insert({
    interaction_id: 17,
    datetime: new Date('2023-07-10T12:12:12.123Z'),
    user_id: 2,
    lead_id: 21,
    lead_contact_id: 13,
    type: 'phoneCall',
    subject: 'Technical Support',
    remarks: 'Assisted with technical issues',
    probability_change: -0.07,
  });
  await knex('interactions').insert({
    interaction_id: 18,
    datetime: new Date('2023-10-25T09:30:30.555Z'),
    user_id: 3,
    lead_id: 14,
    lead_contact_id: 36,
    type: 'meeting',
    subject: 'Project Kickoff',
    remarks: 'Started new project collaboration',
    probability_change: null,
  });
  await knex('interactions').insert({
    interaction_id: 19,
    datetime: new Date('2023-11-11T14:55:15.987Z'),
    user_id: 8,
    lead_id: 11,
    lead_contact_id: 31,
    type: 'email',
    subject: 'Resource Allocation',
    remarks: 'Discussed resource allocation plan',
    probability_change: 0.02,
  });
  await knex('interactions').insert({
    interaction_id: 20,
    datetime: new Date('2023-12-01T10:48:03.756Z'),
    user_id: 5,
    lead_id: 8,
    lead_contact_id: 17,
    type: 'phoneCall',
    subject: 'Performance Review',
    remarks: 'Reviewed recent performance metrics',
    probability_change: null,
  });
  await knex('interactions').insert({
    interaction_id: 21,
    datetime: new Date('2023-08-20T17:20:59.311Z'),
    user_id: 2,
    lead_id: 3,
    lead_contact_id: 23,
    type: 'meeting',
    subject: 'Sales Strategy',
    remarks: 'Discussed sales strategy and targets',
    probability_change: -0.01,
  });
  await knex('interactions').insert({
    interaction_id: 22,
    datetime: new Date('2023-07-30T09:40:40.440Z'),
    user_id: 6,
    lead_id: 19,
    lead_contact_id: 39,
    type: 'email',
    subject: 'Product Demo Request',
    remarks: 'Scheduled product demo session',
    probability_change: 0.18,
  });
  await knex('interactions').insert({
    interaction_id: 23,
    datetime: new Date('2023-09-05T14:12:23.622Z'),
    user_id: 4,
    lead_id: 5,
    lead_contact_id: 25,
    type: 'phoneCall',
    subject: 'Follow-Up Call',
    remarks: 'Checked in on progress and updates',
    probability_change: 0.07,
  });
  await knex('interactions').insert({
    interaction_id: 24,
    datetime: new Date('2023-11-02T11:30:17.895Z'),
    user_id: 8,
    lead_id: 13,
    lead_contact_id: 22,
    type: 'meeting',
    subject: 'Strategy Alignment',
    remarks: 'Aligned strategies for upcoming projects',
    probability_change: null,
  });
  await knex('interactions').insert({
    interaction_id: 25,
    datetime: new Date('2023-10-15T16:28:59.724Z'),
    user_id: 6,
    lead_id: 6,
    lead_contact_id: 11,
    type: 'email',
    subject: 'Contract Renewal',
    remarks: 'Discussed options for contract renewal',
    probability_change: -0.23,
  });
  await knex('interactions').insert({
    interaction_id: 26,
    datetime: new Date('2023-12-10T09:05:43.893Z'),
    user_id: 3,
    lead_id: 17,
    lead_contact_id: 48,
    type: 'phoneCall',
    subject: 'Customer Feedback',
    remarks: 'Gathered feedback on user experience',
    probability_change: 0.14,
  });
  await knex('interactions').insert({
    interaction_id: 27,
    datetime: new Date('2023-09-28T13:19:08.567Z'),
    user_id: 6,
    lead_id: 24,
    lead_contact_id: 21,
    type: 'meeting',
    subject: 'Project Status Update',
    remarks: 'Updated on project milestones',
    probability_change: null,
  });
  await knex('interactions').insert({
    interaction_id: 28,
    datetime: new Date('2023-08-12T10:38:55.228Z'),
    user_id: 5,
    lead_id: 21,
    lead_contact_id: 13,
    type: 'email',
    subject: 'Service Agreement',
    remarks: 'Sent service agreement details',
    probability_change: -0.05,
  });
  await knex('interactions').insert({
    interaction_id: 29,
    datetime: new Date('2023-11-20T14:50:30.911Z'),
    user_id: 2,
    lead_id: 23,
    lead_contact_id: 5,
    type: 'phoneCall',
    subject: 'Account Review',
    remarks: 'Reviewed account performance',
    probability_change: null,
  });
  await knex('interactions').insert({
    interaction_id: 30,
    datetime: new Date('2023-10-10T17:10:10.101Z'),
    user_id: 3,
    lead_id: 2,
    lead_contact_id: 19,
    type: 'meeting',
    subject: 'Training Session',
    remarks: 'Conducted training on new features',
    probability_change: -0.08,
  });
  await knex('interactions').insert({
    interaction_id: 31,
    datetime: new Date('2023-12-05T09:35:44.440Z'),
    user_id: 6,
    lead_id: 12,
    lead_contact_id: 15,
    type: 'email',
    subject: 'Feedback Request',
    remarks: 'Requested feedback on recent interaction',
    probability_change: 0.12,
  });
  await knex('interactions').insert({
    interaction_id: 32,
    datetime: new Date('2023-08-25T14:15:22.654Z'),
    user_id: 6,
    lead_id: 4,
    lead_contact_id: 42,
    type: 'phoneCall',
    subject: 'Consultation Session',
    remarks: 'Provided consultation on issues',
    probability_change: 0.09,
  });
  await knex('interactions').insert({
    interaction_id: 33,
    datetime: new Date('2023-09-15T11:28:16.817Z'),
    user_id: 2,
    lead_id: 17,
    lead_contact_id: 48,
    type: 'meeting',
    subject: 'Market Research',
    remarks: 'Discussed market trends and analysis',
    probability_change: null,
  });
  await knex('interactions').insert({
    interaction_id: 34,
    datetime: new Date('2023-10-02T16:20:45.335Z'),
    user_id: 6,
    lead_id: 19,
    lead_contact_id: 39,
    type: 'email',
    subject: 'Account Setup',
    remarks: 'Assisted with account setup process',
    probability_change: -0.16,
  });
  await knex('interactions').insert({
    interaction_id: 35,
    datetime: new Date('2023-11-30T09:45:55.500Z'),
    user_id: 4,
    lead_id: 5,
    lead_contact_id: 3,
    type: 'phoneCall',
    subject: 'Solution Proposal',
    remarks: 'Presented solution proposal',
    probability_change: null,
  });
  await knex('interactions').insert({
    interaction_id: 36,
    datetime: new Date('2023-12-20T13:55:35.753Z'),
    user_id: 8,
    lead_id: 13,
    lead_contact_id: 22,
    type: 'meeting',
    subject: 'Strategy Review',
    remarks: 'Reviewed strategic plans and goals',
    probability_change: -0.03,
  });
  await knex('interactions').insert({
    interaction_id: 37,
    datetime: new Date('2023-09-02T10:10:10.111Z'),
    user_id: 6,
    lead_id: 6,
    lead_contact_id: 11,
    type: 'email',
    subject: 'Product Enhancement',
    remarks: 'Discussed enhancements for product',
    probability_change: 0.13,
  });
  await knex('interactions').insert({
    interaction_id: 38,
    datetime: new Date('2023-10-08T14:35:35.835Z'),
    user_id: 3,
    lead_id: 17,
    lead_contact_id: 7,
    type: 'phoneCall',
    subject: 'Customer Support',
    remarks: 'Resolved customer support issues',
    probability_change: null,
  });
  await knex('interactions').insert({
    interaction_id: 39,
    datetime: new Date('2023-11-18T11:48:48.888Z'),
    user_id: 4,
    lead_id: 3,
    lead_contact_id: 23,
    type: 'meeting',
    subject: 'Sales Pitch',
    remarks: 'Delivered sales pitch presentation',
    probability_change: 0.02,
  });
  await knex('interactions').insert({
    interaction_id: 40,
    datetime: new Date('2023-08-10T16:16:16.616Z'),
    user_id: 5,
    lead_id: 21,
    lead_contact_id: 13,
    type: 'email',
    subject: 'Contract Discussion',
    remarks: 'Discussed contract terms and conditions',
    probability_change: -0.08,
  });
  await knex('interactions').insert({
    interaction_id: 41,
    datetime: new Date('2023-10-22T10:22:22.222Z'),
    user_id: 2,
    lead_id: 23,
    lead_contact_id: 5,
    type: 'phoneCall',
    subject: 'Project Update',
    remarks: 'Provided update on project progress',
    probability_change: null,
  });
  await knex('interactions').insert({
    interaction_id: 42,
    datetime: new Date('2023-11-05T15:45:45.454Z'),
    user_id: 6,
    lead_id: 12,
    lead_contact_id: 38,
    type: 'email',
    subject: 'Product Launch Announcement',
    remarks: 'Announced upcoming product launch',
    probability_change: 0.21,
  });
  await knex('interactions').insert({
    interaction_id: 43,
    datetime: new Date('2023-12-15T09:59:59.999Z'),
    user_id: 4,
    lead_id: 8,
    lead_contact_id: 17,
    type: 'phoneCall',
    subject: 'Account Management',
    remarks: 'Managed account-related issues',
    probability_change: -0.06,
  });
  await knex('interactions').insert({
    interaction_id: 44,
    datetime: new Date('2023-09-12T12:30:30.303Z'),
    user_id: 5,
    lead_id: 17,
    lead_contact_id: 28,
    type: 'meeting',
    subject: 'Quarterly Review',
    remarks: 'Reviewed quarterly performance',
    probability_change: null,
  });
  await knex('interactions').insert({
    interaction_id: 45,
    datetime: new Date('2023-08-08T11:11:11.111Z'),
    user_id: 6,
    lead_id: 19,
    lead_contact_id: 39,
    type: 'email',
    subject: 'Service Request',
    remarks: 'Processed service request',
    probability_change: -0.12,
  });
  await knex('interactions').insert({
    interaction_id: 46,
    datetime: new Date('2023-10-29T14:14:14.141Z'),
    user_id: 3,
    lead_id: 5,
    lead_contact_id: 3,
    type: 'phoneCall',
    subject: 'Solution Implementation',
    remarks: 'Implemented recommended solutions',
    probability_change: null,
  });
  await knex('interactions').insert({
    interaction_id: 47,
    datetime: new Date('2023-11-28T09:20:20.202Z'),
    user_id: 8,
    lead_id: 13,
    lead_contact_id: 22,
    type: 'meeting',
    subject: 'Performance Evaluation',
    remarks: 'Evaluated performance metrics',
    probability_change: -0.13,
  });
  await knex('interactions').insert({
    interaction_id: 48,
    datetime: new Date('2023-12-25T16:55:55.555Z'),
    user_id: 6,
    lead_id: 6,
    lead_contact_id: 11,
    type: 'email',
    subject: 'Account Management Review',
    remarks: 'Reviewed account management strategies',
    probability_change: 0.08,
  });
}
