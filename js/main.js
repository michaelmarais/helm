$('#bottomTrigger').click(function(event) {

	var click = $(this).data('clicks');

    if (click) {
        var tl = new TimelineMax();
			tl.to($("#logo"), 1, {width: '300px', left: '0px'});
    }else{
        var tl2 = new TimelineMax();
			tl2.to($("#logo"), 1, {width: '180px', left: '40px'});
    };

    $(this).data('clicks', !click); // you have to set it
	
});

$('.item').click(function(event) {
	var tl3 = new TimelineMax();
		tl3.to($("#itemSection"), 1, {left: '0px'});
});

$('#closeItemContainer').click(function(event) {
	var tl4 = new TimelineMax();
		tl4.to($("#itemSection"), 1, {left: '100%'});
});

$('#workItem1').click(function(event) {
	$('.overlay__title').html('STYLE THAT MATCHES YOURS');

	$('.overlay__text').html('We have noticed a large gap in the comparison of a salon&#39;s in store experience versus their online experience. We want to bridge that gap by inspiring the same feelings a client has in your salon but on the web. <br /><br /> This means we study your business and clientele so that we can tailor your site to give visitors the same great experience that they get in your salon. Salon&#39;s do a fantastic job of selling a lifestyle so your website should too.');
});

$('#workItem2').click(function(event) {
	$('.overlay__title').html('INTERNAL BOOKING');

	$('.overlay__text').html('As salon tech grows, salon&#39;s need to adapt. Allowing your customers to book online is a great way to increase appointments and revenue. When a client books on your site, it should feel safe and secure and supply them with everything they need to walk in on the day of their appointment confident that their appointment is awaiting them.<br /><br />When you internalize your booking process you gain a clients trust. This is due to the fact that most salon sites use an external site to complete booking. Having a potential client leave your site to book on another can break their trust and make them ask questions. This can lead to less conversions for new clients. When a client completes booking without ever having to leave your site, they are assured that their information was handled securely.');
});

$('#workItem3').click(function(event) {
	$('.overlay__title').html('USER PROFILES');

	$('.overlay__text').html('One great way to inspire higher activity on your site is to give your clients a client portal. This allows them to login to your site and check on their upcoming and past reservations. Appointments can be reschuled or canceled all within the cleints profile without needing to take the time to call the salon. This not only frees up your receptionists but frees up your phone line for any other client related inquiries.<br /><br />User profiles offer an abundance of creative ways to better engage your clients. One being, your clients could review each appointment afterwards and even upload pictures of their haircut to document past styles and inform stylists on what they liked and didn&#39;t like. This provides a great way for salons to keep track of their clients and offer an engadging and meaningful online experience for them.');
});

$('#workItem4').click(function(event) {
	$('.overlay__title').html('E-COMMERCE');

	$('.overlay__text').html('When it comes down to it, any business revolves around sales. For a salon, sales means not only appointments but product sales. Most salon&#39;s have no way purchasing their product lines online. Salon&#39;s force users to either buy them in store or go somewhere like Amazon to get their desired product. Incorperating e-commerce into your website allows you to sell even when your salon is not open.');
});

$('#workItem5').click(function(event) {
	$('.overlay__title').html('SOPHISTICATED BACK END');

	$('.overlay__text').html('Most salons use some sort of back end application to manage their clients and appointments. Whether its Booker, Vagaro, Timely, etc these systems can have complex back ends that require a lot of tweaking to get the system to perform as desired.<br /><br />We have eperience with booking software and client management software and are confident we can integrate with your current back end solution to provide a more feature-rich and extensive online booking experience. We want things to run smoothly so you can get back to what you do best.');
});

$('#workItem6').click(function(event) {
	$('.overlay__title').html('STYLE BLOG');

	$('.overlay__text').html('Whether you use Instagram or a more tradition blog, it is important to show your clients and potential clients your styles. A blog can be a great tool for this and provide content that keeps users visiting your site to see what styles you are producing at your salon.<br /><br />This style blog can be a great way for potential clients to see if your salon is the right fit for them. Giving a potential client the best representation of your work allows them to quickly decide if they are ready to book and contributes to higher conversion rates.');
});

$('#workItem7').click(function(event) {
	$('.overlay__title').html('STYLISTS SHOW THEIR TRUE COLORS');

	$('.overlay__text').html('Another great way for a potential client to see if your salon and your stylists are a good fit for them is to highlight your stylists. This has traditionally been limited to a picture of the stylist and a short bio or write up about them. This is not enough.<br /><br />Just knowing your stylist is from Kansas does not make a client want to book. What makes a client want to book is when they feel a connection with their stylist. This is the reason why a great stylist who does a great hair cut may not be booked again by a client if that client did not enjoy their time with that stylist. On the flip side, a decent stylist may give a decent haircut but if the client and stylist got along fantastically, the client is more likely to book again with that stylist. We want to inspire that sort of connection within the salon web environment. Offering users videos, excerpts, food recommendations, etc all within that stylists bio. This allows any potential client to have a real connection with their stylist before ever stepping foot in your salon.');
});

$('#workItem8').click(function(event) {
	$('.overlay__title').html('LEAVE A POSITIVE IMPRESSION');

	$('.overlay__text').html('Most of your clients love coming to your salon not only for the service you provide, but for the way you and your staff make them feel as they continue on with their day. An appointment is not just a hair cut. It is part hair cut, part therapy session, part recommending restaurants to try, and more.<br /><br />This leaves a huge gap with how salon&#39;s represent themeselves online. Wouldn&#39;t it be great if a salon&#39;s website provided a similar positive experience that went beyond the hair cut? That is exactly what we strive for at Helm.');
});

$('#workItem9').click(function(event) {
	$('.overlay__title').html('USE REVIEWS TO YOUR ADVANTAGE');

	$('.overlay__text').html('Lastly, almost any stylist can attest to how much their Yelp reviews or online reviews help them gain clientele. So why not emphasize that stylist&#39;s reviews? Doing this allows clients to trust your stylist since they can see they are doing a fantastic job with other clients based on the reviews. Testimonials are a great way to gain client trust and allow a client to book confidently.<br /><br />Another great way to engage clients and get positive feedback is allowing them to leave a testimonial directly on your site. This means no going to Yelp or other services, but allow them to comment to you directly on how much they enjoyed their experience. You can then leverage this on your site to better gain the trust of your potential cleints.');
});
