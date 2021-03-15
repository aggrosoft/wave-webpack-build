const Clickable = function (Glide, Components, Events) {
    const component = {
        onMountAfter: function() {
          function gotoSlide(el, target_slide_index) {
            var is_cloned_slide = el.classList.contains(Glide.settings.classes.cloneSlide);
            var direction = target_slide_index > Glide.index ? '>' : '<';
            
            if (is_cloned_slide) {
              direction = target_slide_index > Glide.index ? '<' : '>'
            }

            if (!el.classList.contains(Glide.settings.classes.activeSlide)) {
              Glide.go(direction);
            }

            Events.emit('slide.click', el)
          }

          Array.prototype.forEach.call(Components.Html.slides, function(el, i) {
            el.dataset.index = i;
            el.addEventListener('click', function() {gotoSlide(this, i)});
          });

          Array.prototype.forEach.call(Components.Clones.items, function(el, i) {
            var slide_index = i < Glide.settings.perView
                            ? Math.abs(i - (Glide.settings.perView + 1))
                            : i - Glide.settings.perView;

            el.dataset.index = slide_index;
            el.addEventListener('click', function() {gotoSlide(this, slide_index)});
          });
        },
        onRun: function() {
          // https://glidejs.com/docs/components/controls/

          // This sets the active class immediately on control clicks.
          Components.Controls.setActive();

          Array.prototype.forEach.call(Components.Html.slides, function(el) {
            el.classList.remove(Glide.settings.classes.activeSlide);
          });

          Components.Html.slides[Glide.index].classList.add(Glide.settings.classes.activeSlide);
        }
      }

      Events.on('mount.after', function () {
        component.onMountAfter()
      })
    
      Events.on('run', function () {
        component.onRun()
      })
    
      return component
}

export default Clickable