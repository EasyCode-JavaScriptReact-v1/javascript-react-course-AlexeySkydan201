var user = {
    name:['firstName','secondName','nickName'],
    placeOfWork:{
    	company:null,
    	position:null
    },
    phone:{
    	mobile:['111111','222222'],
    	home:['333333'],
    	work:[,'444444']
    },
    email: undefined,
    chat: null,
    location:{
    	city: 'Kharkiv',
    	street:null,
    	home: null,
    	apartment:201
    },
   rington:[true,false],
};
console.log(user);
console.log(typeof user.phone.work[0]);
console.log(typeof user.phone.work[1]);