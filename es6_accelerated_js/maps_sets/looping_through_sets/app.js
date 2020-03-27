let set = new Set([1,1,1]);

set.add(2);

for(e of set.entries()){
    console.log(e);
}

for(e of set.keys()){
    console.log(e);
}

for(e of set.values()){
    console.log(e);
}

