import PropTypes from 'prop-types';

function BlogPost(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </>
  );
}

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default function ExampleChildrenProps() {
  return (
    <>
      <BlogPost title="Blog about Animals">
        <img
          src="https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg"
          alt="animal"
          width={300}
        />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet
          risus feugiat in ante. Nunc congue nisi vitae suscipit tellus mauris.
          Ultrices sagittis orci a scelerisque purus semper eget duis at. Arcu
          felis bibendum ut tristique. Lorem dolor sed viverra ipsum. Venenatis
          cras sed felis eget velit aliquet. Ullamcorper morbi tincidunt ornare
          massa eget. Sed egestas egestas fringilla phasellus faucibus
          scelerisque eleifend donec pretium. In fermentum et sollicitudin ac
          orci phasellus egestas tellus. Vel elit scelerisque mauris
          pellentesque pulvinar pellentesque habitant morbi tristique.
        </div>
      </BlogPost>
      <BlogPost title="Blog about Animals">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet
          risus feugiat in ante. Nunc congue nisi vitae suscipit tellus mauris.
          Ultrices sagittis orci a scelerisque purus semper eget duis at. Arcu
          felis bibendum ut tristique. Lorem dolor sed viverra ipsum. Venenatis
          cras sed felis eget velit aliquet. Ullamcorper morbi tincidunt ornare
          massa eget. Sed egestas egestas fringilla phasellus faucibus
          scelerisque eleifend donec pretium. In fermentum et sollicitudin ac
          orci phasellus egestas tellus. Vel elit scelerisque mauris
          pellentesque pulvinar pellentesque habitant morbi tristique.
        </div>
        <img
          src="https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg"
          alt="animal"
          width={300}
        />
      </BlogPost>
      <BlogPost title="Blog about Animals">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet
          risus feugiat in ante. Nunc congue nisi vitae suscipit tellus mauris.
          Ultrices sagittis orci a scelerisque purus semper eget duis at.
        </div>
        <img
          src="https://media.wired.com/photos/593261cab8eb31692072f129/master/w_2560%2Cc_limit/85120553.jpg"
          alt="animal"
          width={300}
        />
        <div>
          Arcu felis bibendum ut tristique. Lorem dolor sed viverra ipsum.
          Venenatis cras sed felis eget velit aliquet. Ullamcorper morbi
          tincidunt ornare massa eget. Sed egestas egestas fringilla phasellus
          faucibus scelerisque eleifend donec pretium. In fermentum et
          sollicitudin ac orci phasellus egestas tellus. Vel elit scelerisque
          mauris pellentesque pulvinar pellentesque habitant morbi tristique.
        </div>
      </BlogPost>
    </>
  );
}
