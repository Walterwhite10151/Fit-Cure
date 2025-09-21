// BMR & Protein
function calculateBMRProtein() {
  const weight = parseFloat(document.getElementById('userWeight').value);
  const height = parseFloat(document.getElementById('userHeight').value);
  const age = parseFloat(document.getElementById('userAge').value);
  const gender = document.getElementById('userGender').value;

  let bmr;
  if(gender==="male"){
    bmr = 88.362 + (13.397*weight) + (4.799*height) - (5.677*age);
  } else {
    bmr = 447.593 + (9.247*weight) + (3.098*height) - (4.330*age);
  }
  bmr = bmr.toFixed(1);
  const protein = (weight*1.8).toFixed(1);

  document.getElementById('bmrResult').innerText = `Your BMR: ${bmr} calories/day`;
  document.getElementById('proteinResult').innerText = `Recommended Protein Intake: ${protein} g/day`;
}

// Muscle Exercises
const muscleData={
  chest:[ {name:"Push Ups", video:"_l3ySVKYVJ8", tip:"Keep elbows close."},{name:"Bench Press", video:"gRVjAtPip0Y", tip:"Control bar."},{name:"Chest Fly", video:"eozdVDA78K0", tip:"Slight elbow bend."},{name:"Incline Press", video:"DbFgADa2PL8", tip:"Use moderate weight."},{name:"Cable Crossover", video:"taI4XduLpTk", tip:"Control motion."} ],
  back:[ {name:"Pull Ups", video:"eGo4IYlbE5g", tip:"Engage back muscles."},{name:"Deadlift", video:"op9kVnSso6Q", tip:"Keep back straight."},{name:"Bent Over Row", video:"vT2GjY_Umpw", tip:"Squeeze shoulder blades."},{name:"Lat Pulldown", video:"CAwf7n6Luuc", tip:"Avoid leaning back."} ],
  triceps:[ {name:"Tricep Dips", video:"0326dy_-CzM", tip:"Elbows close."},{name:"Overhead Triceps Extension", video:"v8_Q9zR2yPQ", tip:"Full range motion."},{name:"Close-Grip Bench Press", video:"-_rkfHq4lQo", tip:"Control weight."},{name:"Tricep Kickbacks", video:"6OJJ9X0hPj0", tip:"Slow and controlled."},{name:"Rope Pushdown", video:"2-LamfG3C5k", tip:"Elbows stationary."} ],
  biceps:[ {name:"Bicep Curls", video:"ykJmrZ5v0Oo", tip:"Don't swing arms."},{name:"Hammer Curls", video:"TwD-YGVP4Bk", tip:"Neutral grip."},{name:"Concentration Curls", video:"eHhGRJIDr5c", tip:"Peak contraction focus."},{name:"Cable Curls", video:"zC3nLlEvin4", tip:"Controlled motion."},{name:"Incline Dumbbell Curl", video:"soxrZlIl35U", tip:"Stretch fully at bottom."} ],
  abs:[ {name:"Crunches", video:"Xyd_fa5zoEU", tip:"Engage core."},{name:"Leg Raises", video:"JB2oyawG9KI", tip:"Slow and controlled."},{name:"Plank", video:"pSHjTRCQxIw", tip:"Keep body straight."},{name:"Bicycle Crunch", video:"9FGilxCbdz8", tip:"Twist slowly."},{name:"Russian Twist", video:"wkD8rjkodUI", tip:"Feet off floor for intensity."} ],
  shoulders:[ {name:"Shoulder Press", video:"B-aVuyhvLHU", tip:"Avoid arching back."},{name:"Lateral Raise", video:"3VcKaXpzqRo", tip:"Controlled movement."},{name:"Front Raise", video:"-t7fuZ0KhDA", tip:"Don't lock elbows."},{name:"Rear Delt Fly", video:"1z1NlYcMrdk", tip:"Focus on rear delts."},{name:"Arnold Press", video:"vj2w851ZHRM", tip:"Rotate palms smoothly."} ],
  legs:[ {name:"Squats", video:"Dy28eq2PjcM", tip:"Go parallel or below."},{name:"Lunges", video:"QOVaHwm-Q6U", tip:"Torso upright."},{name:"Leg Press", video:"IZxyjW7MPJQ", tip:"Don't lock knees."},{name:"Leg Curl", video:"1Tq3QdYUuHs", tip:"Controlled motion."},{name:"Calf Raise", video:"-M4-G8p8fmc", tip:"Pause at top."} ]
};

// Show Exercises
function showSelectedMuscle(){
  const muscle = document.getElementById("muscleSelect").value;
  const list = document.getElementById("muscleList");
  let html='';
  const data = muscleData[muscle];
  data.forEach(ex=>{
    html+=`<div class="exercise-item">
      <strong>${ex.name}</strong>
      <iframe src="https://www.youtube.com/embed/${ex.video.split('/').pop()}" frameborder="0" allowfullscreen></iframe>
      <div class="pro-tip">PRO TIP: ${ex.tip}</div>
    </div>`;
  });
  list.innerHTML=html;
}

// Yoga Asanas
const yogaData = [
  {name:"Surya Namaskar", steps:"Stand straight, fold hands, forward bend, plank, cobra, downward dog, repeat."},
  {name:"Tadasana", steps:"Stand tall, arms by sides, stretch upwards."},
  {name:"Vrikshasana", steps:"Stand on one leg, hands together above head."},
  {name:"Bhujangasana", steps:"Lie on stomach, lift chest with arms, hold."},
  {name:"Dhanurasana", steps:"Lie on stomach, grab feet, lift chest and legs."},
  {name:"Paschimottanasana", steps:"Sit, extend legs, reach forward."},
  {name:"Shavasana", steps:"Lie on back, relax completely."},
  {name:"Trikonasana", steps:"Stand, stretch to side, one hand down one hand up."},
  {name:"Ardha Matsyendrasana", steps:"Sit, twist torso, one leg over the other."},
  {name:"Setu Bandhasana", steps:"Lie on back, lift hips, hands under back."}
];

function loadYoga(){
  const list=document.getElementById("yogaList");
  let html='';
  yogaData.forEach(y=>{
    html+=`<div class="yoga-item"><strong>${y.name}</strong><br>Steps: ${y.steps}</div>`;
  });
  list.innerHTML=html;
}

// Mental Health Solutions
const mentalData=[
  {problem:"Stress", solution:"Practice deep breathing and meditation regularly."},
  {problem:"Anxiety", solution:"Engage in physical activity and maintain a routine."},
  {problem:"Depression", solution:"Seek support, talk to a professional, and stay active."},
  {problem:"Insomnia", solution:"Maintain sleep schedule and avoid screens before bed."},
  {problem:"Fatigue", solution:"Eat balanced diet and stay hydrated."},
  {problem:"Low Motivation", solution:"Set small achievable goals and track progress."},
  {problem:"Mood Swings", solution:"Practice mindfulness and manage triggers."},
  {problem:"Overthinking", solution:"Distract with hobbies and practice journaling."},
  {problem:"Social Anxiety", solution:"Gradual exposure and social practice."},
  {problem:"Memory Issues", solution:"Regular brain exercises and adequate sleep."}
];

function loadMental(){
  const list=document.getElementById("mentalList");
  let html='';
  mentalData.forEach(m=>{
    html+=`<div class="mental-item"><strong>${m.problem}:</strong> ${m.solution}</div>`;
  });
  list.innerHTML=html;
}

// Weekly Diet Planner
const dietData={
  veg:[
    {day:"Monday", breakfast:"Oats", lunch:"Paneer Curry", dinner:"Veg Pulao", supper:"Fruits"},
    {day:"Tuesday", breakfast:"Idli", lunch:"Dal Tadka", dinner:"Veg Sandwich", supper:"Milk"},
    {day:"Wednesday", breakfast:"Poha", lunch:"Chole", dinner:"Roti Sabzi", supper:"Nuts"},
    {day:"Thursday", breakfast:"Upma", lunch:"Rajma", dinner:"Khichdi", supper:"Fruits"},
    {day:"Friday", breakfast:"Dosa", lunch:"Veg Biryani", dinner:"Salad", supper:"Milk"},
    {day:"Saturday", breakfast:"Paratha", lunch:"Mixed Veg", dinner:"Paneer Tikka", supper:"Fruits"},
    {day:"Sunday", breakfast:"Muesli", lunch:"Veg Pasta", dinner:"Soup", supper:"Nuts"}
  ],
  nonveg:[
    {day:"Monday", breakfast:"Egg Omelette", lunch:"Chicken Curry", dinner:"Fish Fry", supper:"Milk"},
    {day:"Tuesday", breakfast:"Boiled Eggs", lunch:"Mutton Curry", dinner:"Grilled Chicken", supper:"Fruits"},
    {day:"Wednesday", breakfast:"Egg Sandwich", lunch:"Fish Curry", dinner:"Chicken Salad", supper:"Milk"},
    {day:"Thursday", breakfast:"Scrambled Eggs", lunch:"Chicken Biryani", dinner:"Grilled Fish", supper:"Fruits"},
    {day:"Friday", breakfast:"Omelette", lunch:"Prawn Curry", dinner:"Mutton Soup", supper:"Milk"},
    {day:"Saturday", breakfast:"Egg Toast", lunch:"Chicken Roast", dinner:"Fish Curry", supper:"Fruits"},
    {day:"Sunday", breakfast:"Egg Muffin", lunch:"Mutton Roast", dinner:"Grilled Chicken", supper:"Milk"}
  ],
  both:[ /* merge both arrays for simplicity */ ]
};
dietData.both=[...dietData.veg,...dietData.nonveg];

function generateDiet(type){
  const list=document.getElementById("dietList");
  let html='';
  dietData[type].forEach(d=>{
    html+=`<div class="diet-item"><strong>${d.day}:</strong> Breakfast: ${d.breakfast}, Lunch: ${d.lunch}, Dinner: ${d.dinner}, Supper: ${d.supper}</div>`;
  });
  list.innerHTML=html;
}

// Back to top
function topFunction(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize
window.onload=function(){
  showSelectedMuscle();
  loadYoga();
  loadMental();
  generateDiet('both');
};
