

const onSubmit = () => {
    console.log("Submit...",submit)
    const ratingCard = document.getElementById('rating');
    const thankyouCard = document.getElementById('thank-you');
    const ratingText = document.getElementById('rating-text');
    const value = document.querySelector('input[name="rating"]:checked').value
    ratingText.innerText = `You selected ${value} out of 5`
    ratingCard.style.display = 'none';
    thankyouCard.style.display = 'block'
}

