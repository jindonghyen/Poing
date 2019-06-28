/*
	PoingSlider
	( * sign = Important Argument)

	* selector : slider selector string
	* animation : how to animate (current only slideToLeft)
	autoStart : default false

	afterCreate : callback after create
	afterSlide : callback after slide
*/

function PoingSlider(argument)
{
	if(arguments.callee.caller != PoingSlider.Create)
	{
		console.error("[PoingSlider]", "should be created by only Po" +
				"" +
				"ingSlider.Create");
		return null;
	}

	this.option = argument;
	this.isSlide = false;

	this.getParent().addClass("PoingSlider_wrap");
	var slider = $(this.option.selector);
	slider.addClass("PoingSlider");
	var slices = slider.children();
	for(var i = 0; i < slices.length; i++)
	{
		if(i == this.option.startSlice) $(slices[i]).addClass("current");
		$(slices[i]).addClass("slice");

		// slideToLeft
		$(slices[i]).css("top", "0px");
		$(slices[i]).css("left", i > this.option.startSlice ? "100%" : (i == this.option.startSlice ? "0" : "-100%"));
	}

	setTimeout($.proxy(this.option.afterCreate, this), 0);

	if(this.option.autoSlide == true)
	{
		this.option.slideTimer = setTimeout($.proxy(this.slideToNext, this), this.option.slideDuration);

		this.getParent().on("mouseover", $.proxy(function()
		{
			if(this.option.slideTimer != null)
			{
				clearTimeout(this.option.slideTimer);
				this.option.slideTimer = null;
			}
		}, this));

		this.getParent().on("mouseout", $.proxy(function()
		{
			this.option.slideTimer = setTimeout($.proxy(this.slideToNext, this), this.option.slideDuration);
		}, this));
	}
}

PoingSlider.Create = function(argument)
{
	var defaultOption = {
		selector: "",
		startSlice: 0,
		animation: "slideToLeft",
		autoSlide: false,
		slideDuration: 3000,
		animationDuration: 300,

		afterCreate: function() {},
		afterSlide: function() {},
	};

	var option = $.extend({}, defaultOption, argument);

	if(typeof option.selector != "string")
	{
		console.error("[PoingSlider]", "selector should be string.");
		return null;
	}
	else if($(option.selector).length <= 0)
	{
		//console.error("[PoingSlider]", "selector should be exist.");
		return null;
	}

	return new PoingSlider(option);
}

PoingSlider.prototype.getParent = function()
{
	return $(this.option.selector).parent();
}
PoingSlider.prototype.getSlice = function()
{
	return $(this.option.selector).find(".slice");
}
PoingSlider.prototype.getSliceCount = function()
{
	return $(this.option.selector).find(".slice").length;
}

PoingSlider.prototype.getCurrentSlice = function()
{
	return $(this.option.selector).find(".current");
}
PoingSlider.prototype.getCurrentSliceIndex = function()
{
	return $(this.option.selector).find(".current").index();
}

PoingSlider.prototype.slideToPrev = function()
{
	if(this.getSliceCount() <= 1)
	{
		return;
	}
	if(this.option.autoSlide == true)
	{
		if(this.option.slideTimer != null)
		{
			clearTimeout(this.option.slideTimer);
			this.option.slideTimer = null;
		}
	}

	var slider = $(this.option.selector);
	var current = slider.find(".current");
	var prev = current.prev();

	if(prev.length == 0)
	{
		prev = slider.find(".slice").last();
	}

	if(this.option.animation == "slideToLeft")
	{
		this.sliceToRight(current, prev);
	}

	if(this.option.autoSlide == true)
	{
		this.option.slideTimer = setTimeout($.proxy(this.slideToNext, this), this.option.slideDuration);
	}
};

PoingSlider.prototype.slideToNext = function()
{
	if(this.getSliceCount() <= 1)
	{
		return;
	}
	if(this.option.autoSlide == true)
	{
		if(this.option.slideTimer != null)
		{
			clearTimeout(this.option.slideTimer);
			this.option.slideTimer = null;
		}
	}

	var slider = $(this.option.selector);
	var current = slider.find(".current");
	var next = current.next();

	if(next.length == 0)
	{
		next = slider.find(".slice").first();
	}

	if(this.option.animation == "slideToLeft")
	{
		this.sliceToLeft(current, next);
	}

	if(this.option.autoSlide == true)
	{
		this.option.slideTimer = setTimeout($.proxy(this.slideToNext, this), this.option.slideDuration);
	}
};

PoingSlider.prototype.slideTo = function(index)
{
	if(this.getSliceCount() <= 1)
	{
		return;
	}
	var slider = $(this.option.selector);
	var current = slider.find(".current");
	var next = slider.children().eq(index);

	if(next.length == 0)
	{
		next = slider.find(".slice").first();
	}

	if(this.option.animation == "slideToLeft")
	{
		if(current.index() < next.index())
		{
			this.sliceToLeft(current, next);
		}
		else if(current.index() > next.index())
		{
			this.sliceToRight(current, next);
		}
	}
};

PoingSlider.prototype.sliceToLeft = function(slice1, slice2)
{
	if(this.isSlide == false)
	{
		this.isSlide = true;
		slice1.css("left", "0px");
		slice1.animate({left:"-100%"}, this.option.animationDuration);
		slice1.removeClass("current");
		slice2.css("left", "100%");
		slice2.animate({left:"0"}, {duration:this.option.animationDuration, complete:$.proxy(function() { this.isSlide = false; this.option.afterSlide(); $("body").scrollTo("+=1px").scrollTo("-=1px"); }, this)});
		slice2.addClass("current");
	}
};

PoingSlider.prototype.sliceToRight = function(slice1, slice2)
{
	if(this.isSlide == false)
	{
		this.isSlide = true;
		slice1.css("left", "0px");
		slice1.animate({left:"100%"}, this.option.animationDuration);
		slice1.removeClass("current");
		slice2.css("left", "-100%");
		slice2.animate({left:"0"}, {duration:this.option.animationDuration, complete:$.proxy(function() { this.isSlide = false; this.option.afterSlide(); $("body").scrollTo("+=1px").scrollTo("-=1px"); }, this)});
		slice2.addClass("current");
	}
};