function nextButton() {
    const handleClick = () => {
        // Logic to navigate to the next page
        console.log("Next button clicked"); 
    }
    return (
        <button onClick={handleClick}>
            Next
        </button>
    );
}

export default nextButton;